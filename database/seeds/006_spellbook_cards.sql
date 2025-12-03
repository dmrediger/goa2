-- Seed: 006_spellbook_cards.sql
-- Description: Gydion's Spellbook cards seed data
-- Spell levels: 1 = Level 1, 2 = Level 2, 3 = Level 3, 4 = Ultimate

-- ============================================
-- GYDION'S SPELLBOOK - LEVEL 1
-- ============================================

INSERT INTO spellbook_cards (hero_id, spell_level, card_index, name, card_type, initiative_value, attack_value, range_value, effect_text, card_image, back_image) VALUES
  -- Magic Missile (Level 1 Basic Attack - Ranged)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 0, 'Magic Missile', 'Basic Attack', NULL, 1, 3,
   'Target a unit in range and not adjacent to you.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 0.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG'),

  -- Shocking Grasp (Level 1 Basic Attack)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 1, 'Shocking Grasp', 'Basic Attack', NULL, 3, NULL,
   'Target a unit adjacent to you. After the attack: Move the target up to 1 space.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 1.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG'),

  -- Additional Level 1 spells (Spellbook 2, 3, 9, 15)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 2, 'Level 1 Spell 2', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 2.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 3, 'Level 1 Spell 3', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 3.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 9, 'Level 1 Spell 9', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 9.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 1, 15, 'Level 1 Spell 15', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Spellbook 15.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 1/Back_One.JPEG');

-- ============================================
-- GYDION'S SPELLBOOK - LEVEL 2
-- ============================================

INSERT INTO spellbook_cards (hero_id, spell_level, card_index, name, card_type, initiative_value, attack_value, range_value, effect_text, card_image, back_image) VALUES
  -- Create Undead (Level 2 Skill - Ranged)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 4, 'Create Undead', 'Skill - Ranged', 2, NULL, 3,
   'Respawn a friendly minion in an empty friendly spawn point in range in the battle zone.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 4.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  -- Additional Level 2 spells
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 5, 'Level 2 Spell 5', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 5.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 6, 'Level 2 Spell 6', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 6.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 10, 'Level 2 Spell 10', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 10.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 11, 'Level 2 Spell 11', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 11.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 12, 'Level 2 Spell 12', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 12.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 16, 'Level 2 Spell 16', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 16.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 17, 'Level 2 Spell 17', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 17.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 2, 18, 'Level 2 Spell 18', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Spellbook 18.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 2/Back_Two.JPEG');

-- ============================================
-- GYDION'S SPELLBOOK - LEVEL 3
-- ============================================

INSERT INTO spellbook_cards (hero_id, spell_level, card_index, name, card_type, initiative_value, attack_value, range_value, effect_text, card_image, back_image) VALUES
  -- Sunburst (Level 3 Attack - Ranged)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 7, 'Sunburst', 'Attack - Ranged', 3, 0, 0,
   'Target a unit at maximum range. +1 Attack and +1 Range for each other spell card removed from the spellbook.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 7.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG'),

  -- Additional Level 3 spells
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 8, 'Level 3 Spell 8', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 8.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 13, 'Level 3 Spell 13', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 13.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 14, 'Level 3 Spell 14', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 14.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 19, 'Level 3 Spell 19', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 19.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG'),

  ((SELECT id FROM heroes WHERE slug = 'gydion'), 3, 20, 'Level 3 Spell 20', 'Skill', NULL, NULL, NULL,
   'Effect text to be populated from card image.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Spellbook 20.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Level 3/Background.JPEG');

-- ============================================
-- GYDION'S SPELLBOOK - ULTIMATE (Level 4)
-- ============================================

INSERT INTO spellbook_cards (hero_id, spell_level, card_index, name, card_type, initiative_value, attack_value, range_value, effect_text, card_image, back_image) VALUES
  -- Wish (Ultimate Skill)
  ((SELECT id FROM heroes WHERE slug = 'gydion'), 4, 21, 'Wish', 'Skill', 4, NULL, NULL,
   'Cast any spell in the Spellbook. After you cast the "Wish" spell three times your team wins the game.',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Ult/Spellbook 21.JPEG',
   'Hero Cards/Arcane/Gydion/Gydions Spellbook/Ult/Back_Four.JPEG');
