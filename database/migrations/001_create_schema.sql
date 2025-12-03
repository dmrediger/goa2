-- Migration: 001_create_schema.sql
-- Description: Create the complete schema for Guardian of Altaruk hero cards database
-- Created: 2024

-- ============================================
-- ENUM TYPES
-- ============================================

CREATE TYPE collection_type AS ENUM (
  'Arcane', 'Base', 'Defiant', 'Devoted', 'Renowned', 'Wayward'
);

CREATE TYPE card_type AS ENUM (
  'Basic Attack',
  'Skill',
  'Skill - Melee',
  'Skill - Ranged',
  'Movement',
  'Defense',
  'Versatile',
  'Versatile - Melee',
  'Versatile - Ranged',
  'Special'
);

CREATE TYPE role_type AS ENUM (
  'Tactician',
  'Disabler',
  'Durable',
  'Pusher',
  'Damager',
  'Sniper',
  'Melee',
  'Tokens',
  'Farming',
  'Support',
  'Mobile',
  'Zoner'
);

-- ============================================
-- TABLES
-- ============================================

-- Collections table
CREATE TABLE collections (
  id            SERIAL PRIMARY KEY,
  name          collection_type UNIQUE NOT NULL,
  display_name  VARCHAR(50) NOT NULL,
  theme_color   VARCHAR(7),  -- hex color for UI
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Roles lookup table
CREATE TABLE roles (
  id          SERIAL PRIMARY KEY,
  name        role_type UNIQUE NOT NULL,
  icon_path   VARCHAR(255),
  description TEXT,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Heroes table
CREATE TABLE heroes (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(100) NOT NULL UNIQUE,
  slug            VARCHAR(100) NOT NULL UNIQUE,  -- URL-friendly name
  collection_id   INT NOT NULL REFERENCES collections(id),
  complexity      SMALLINT CHECK (complexity BETWEEN 1 AND 3),

  -- Stats (1-8 scale)
  attack          SMALLINT NOT NULL CHECK (attack BETWEEN 1 AND 8),
  defense         SMALLINT NOT NULL CHECK (defense BETWEEN 1 AND 8),
  initiative      SMALLINT NOT NULL CHECK (initiative BETWEEN 1 AND 8),
  movement        SMALLINT NOT NULL CHECK (movement BETWEEN 1 AND 8),

  -- Computed stat total for balancing/sorting
  stat_total      SMALLINT GENERATED ALWAYS AS (attack + defense + initiative + movement) STORED,

  -- Image references (relative paths)
  hero_card_image VARCHAR(255),
  card_back_image VARCHAR(255),
  folder_path     VARCHAR(255),

  -- Special mechanics
  has_spellbook   BOOLEAN DEFAULT FALSE,
  deck_size       SMALLINT DEFAULT 20,  -- total cards including hero card

  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Hero-Role junction table (many-to-many)
CREATE TABLE hero_roles (
  hero_id     INT NOT NULL REFERENCES heroes(id) ON DELETE CASCADE,
  role_id     INT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  priority    SMALLINT DEFAULT 0,  -- order of importance (1 = primary)
  PRIMARY KEY (hero_id, role_id)
);

-- Action cards table
CREATE TABLE cards (
  id               SERIAL PRIMARY KEY,
  hero_id          INT NOT NULL REFERENCES heroes(id) ON DELETE CASCADE,
  card_index       SMALLINT NOT NULL,  -- 1-19+ position in deck

  name             VARCHAR(100) NOT NULL,
  card_type        card_type NOT NULL,
  card_level       SMALLINT CHECK (card_level BETWEEN 1 AND 3),  -- I, II, III

  -- Card stats (nullable as not all cards have all stats)
  initiative_value SMALLINT,
  attack_value     SMALLINT,
  defense_value    SMALLINT,
  movement_value   SMALLINT,
  range_value      SMALLINT,

  -- Effect
  effect_text      TEXT,
  effect_keywords  TEXT[],  -- extracted keywords for searching
  has_aftershock   BOOLEAN DEFAULT FALSE,

  -- Image reference
  card_image       VARCHAR(255),

  created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  UNIQUE (hero_id, card_index)
);

-- Spellbook cards (for Gydion and future spell-based heroes)
CREATE TABLE spellbook_cards (
  id               SERIAL PRIMARY KEY,
  hero_id          INT NOT NULL REFERENCES heroes(id) ON DELETE CASCADE,
  spell_level      SMALLINT NOT NULL CHECK (spell_level BETWEEN 1 AND 4), -- 1,2,3,4(Ult)
  card_index       SMALLINT NOT NULL,

  name             VARCHAR(100) NOT NULL,
  card_type        card_type NOT NULL,

  initiative_value SMALLINT,
  attack_value     SMALLINT,
  defense_value    SMALLINT,
  movement_value   SMALLINT,
  range_value      SMALLINT,

  effect_text      TEXT,
  effect_keywords  TEXT[],

  card_image       VARCHAR(255),
  back_image       VARCHAR(255),  -- level-specific back

  created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  UNIQUE (hero_id, spell_level, card_index)
);

-- ============================================
-- INDEXES
-- ============================================

-- Hero indexes
CREATE INDEX idx_heroes_collection ON heroes(collection_id);
CREATE INDEX idx_heroes_slug ON heroes(slug);
CREATE INDEX idx_heroes_attack ON heroes(attack);
CREATE INDEX idx_heroes_defense ON heroes(defense);
CREATE INDEX idx_heroes_initiative ON heroes(initiative);
CREATE INDEX idx_heroes_movement ON heroes(movement);
CREATE INDEX idx_heroes_stat_total ON heroes(stat_total);
CREATE INDEX idx_heroes_complexity ON heroes(complexity);

-- Card indexes
CREATE INDEX idx_cards_hero ON cards(hero_id);
CREATE INDEX idx_cards_type ON cards(card_type);
CREATE INDEX idx_cards_level ON cards(card_level);
CREATE INDEX idx_cards_initiative ON cards(initiative_value);

-- Hero roles indexes
CREATE INDEX idx_hero_roles_role ON hero_roles(role_id);
CREATE INDEX idx_hero_roles_priority ON hero_roles(hero_id, priority);

-- Spellbook indexes
CREATE INDEX idx_spellbook_hero ON spellbook_cards(hero_id);
CREATE INDEX idx_spellbook_level ON spellbook_cards(spell_level);

-- Full-text search indexes
CREATE INDEX idx_cards_effect_search ON cards USING gin(to_tsvector('english', effect_text));
CREATE INDEX idx_cards_keywords ON cards USING gin(effect_keywords);
CREATE INDEX idx_spellbook_effect_search ON spellbook_cards USING gin(to_tsvector('english', effect_text));

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for heroes table
CREATE TRIGGER update_heroes_updated_at
    BEFORE UPDATE ON heroes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VIEWS
-- ============================================

-- View for heroes with their roles as an array
CREATE VIEW heroes_with_roles AS
SELECT
    h.*,
    c.name as collection_name,
    c.theme_color,
    ARRAY_AGG(r.name ORDER BY hr.priority) as roles
FROM heroes h
JOIN collections c ON h.collection_id = c.id
LEFT JOIN hero_roles hr ON h.id = hr.hero_id
LEFT JOIN roles r ON hr.role_id = r.id
GROUP BY h.id, c.name, c.theme_color;

-- View for card counts per hero
CREATE VIEW hero_card_counts AS
SELECT
    h.id as hero_id,
    h.name as hero_name,
    COUNT(c.id) as action_card_count,
    COUNT(sc.id) as spellbook_card_count,
    COUNT(c.id) + COUNT(sc.id) + 1 as total_cards  -- +1 for hero card
FROM heroes h
LEFT JOIN cards c ON h.id = c.hero_id
LEFT JOIN spellbook_cards sc ON h.id = sc.hero_id
GROUP BY h.id, h.name;

-- View for searching cards with hero info
CREATE VIEW searchable_cards AS
SELECT
    c.id,
    c.name as card_name,
    c.card_type,
    c.card_level,
    c.effect_text,
    c.initiative_value,
    c.attack_value,
    c.defense_value,
    c.movement_value,
    c.range_value,
    h.name as hero_name,
    h.slug as hero_slug,
    col.name as collection_name
FROM cards c
JOIN heroes h ON c.hero_id = h.id
JOIN collections col ON h.collection_id = col.id;
