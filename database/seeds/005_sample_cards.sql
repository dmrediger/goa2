-- Seed: 005_sample_cards.sql
-- Description: Sample card data structure for action cards
-- Note: This file contains representative samples. Full card data should be
--       populated via OCR/manual entry from all card images.

-- ============================================
-- CARD TYPE REFERENCE:
-- ============================================
-- 'Basic Attack'       - Standard melee attack cards
-- 'Attack'             - Enhanced attack cards with special effects
-- 'Basic Attack - Ranged' - Ranged basic attacks
-- 'Attack - Ranged'    - Enhanced ranged attacks
-- 'Skill'              - Skill-based abilities
-- 'Skill - Melee'      - Melee skill abilities
-- 'Skill - Ranged'     - Ranged skill abilities
-- 'Movement'           - Movement-focused cards
-- 'Defense'            - Defensive cards
-- 'Versatile'          - Multi-purpose cards
-- 'Versatile - Melee'  - Melee versatile cards
-- 'Versatile - Ranged' - Ranged versatile cards
-- 'Special'            - Unique mechanic cards

-- ============================================
-- SAMPLE CARDS - ARIEN (Base Collection)
-- ============================================

INSERT INTO cards (hero_id, card_index, name, card_type, card_level, initiative_value, attack_value, defense_value, movement_value, range_value, effect_text, has_aftershock, card_image) VALUES
  -- Card 1: Noble Blade
  ((SELECT id FROM heroes WHERE slug = 'arien'), 1, 'Noble Blade', 'Basic Attack', 1, 11, 2, 1, 4, NULL,
   'Target a unit adjacent to you. Before the attack: You may move another unit that is adjacent to the target 1 space. ("Another unit" never includes you.)',
   FALSE, 'Hero Cards/Base/Arien/Arien 1.JPEG'),

  -- Card 5: Liquid Leap
  ((SELECT id FROM heroes WHERE slug = 'arien'), 5, 'Liquid Leap', 'Skill - Ranged', 1, 4, 3, 2, NULL, 2,
   'Place yourself into a space in range without a spawn point and not adjacent to an empty spawn point.',
   FALSE, 'Hero Cards/Base/Arien/Arien 5.JPEG'),

  -- Card 10: Magical Current
  ((SELECT id FROM heroes WHERE slug = 'arien'), 10, 'Magical Current', 'Skill - Ranged', 2, 4, 3, 2, NULL, 3,
   'Place yourself into a space in range without a spawn point and not adjacent to an empty spawn point.',
   TRUE, 'Hero Cards/Base/Arien/Arien 10.JPEG'),

  -- Card 15: Deluge
  ((SELECT id FROM heroes WHERE slug = 'arien'), 15, 'Deluge', 'Movement', 3, 10, NULL, 6, 3, 1,
   'This turn: Enemy heroes in radius cannot fast travel, or move more than 1 space with a movement action.',
   TRUE, 'Hero Cards/Base/Arien/Arien 15.JPEG');

-- ============================================
-- SAMPLE CARDS - BROGAN (Base Collection)
-- ============================================

INSERT INTO cards (hero_id, card_index, name, card_type, card_level, initiative_value, attack_value, defense_value, movement_value, range_value, effect_text, has_aftershock, card_image) VALUES
  -- Card 1: Onslaught
  ((SELECT id FROM heroes WHERE slug = 'brogan'), 1, 'Onslaught', 'Basic Attack', 1, 11, 3, 1, 4, NULL,
   'Target a unit adjacent to you. After the attack: Move into the space it occupied, if able.',
   FALSE, 'Hero Cards/Base/Brogan/Brogan 1.JPEG'),

  -- Card 8: Mighty Punch
  ((SELECT id FROM heroes WHERE slug = 'brogan'), 8, 'Mighty Punch', 'Skill', 2, 9, 6, 2, NULL, NULL,
   'You may move 1 space. Push an enemy unit or a token adjacent to you up to 2 spaces.',
   TRUE, 'Hero Cards/Base/Brogan/Brogan 8.JPEG');

-- ============================================
-- SAMPLE CARDS - GARRUS (Defiant Collection)
-- ============================================

INSERT INTO cards (hero_id, card_index, name, card_type, card_level, initiative_value, attack_value, defense_value, movement_value, range_value, effect_text, has_aftershock, card_image) VALUES
  -- Card 3: Trace
  ((SELECT id FROM heroes WHERE slug = 'garrus'), 3, 'Trace', 'Attack', 1, 7, 5, 4, 3, NULL,
   'Choose one - Before the attack: If you have one or more cards in the discard, you may move 1 space. Target a hero adjacent to you. - Target a unit adjacent to you.',
   FALSE, 'Hero Cards/Defiant/Garrus/Garrus 3.JPEG');

-- ============================================
-- SAMPLE CARDS - GYDION (Arcane Collection)
-- ============================================

INSERT INTO cards (hero_id, card_index, name, card_type, card_level, initiative_value, attack_value, defense_value, movement_value, range_value, effect_text, has_aftershock, card_image) VALUES
  -- Card 5: Elementary Abjuration
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 5, 'Elementary Abjuration', 'Skill', 1, 5, 2, 2, NULL, NULL,
   'Cast the "Shield" spell in the spellbook. (The magic shield protects against mundane threats.)',
   FALSE, 'Hero Cards/Arcane/Gydion/Gydion 5.JPEG');
