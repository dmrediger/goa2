-- Seed: 004_hero_roles.sql
-- Description: Seed data for hero-role relationships
-- Priority: 1 = primary role, 2+ = secondary roles

-- ============================================
-- BASE COLLECTION HERO ROLES
-- ============================================

-- Arien: Tactician, Disabler, Durable, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'arien'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'arien'), (SELECT id FROM roles WHERE name = 'Disabler'), 2),
  ((SELECT id FROM heroes WHERE slug = 'arien'), (SELECT id FROM roles WHERE name = 'Durable'), 3),
  ((SELECT id FROM heroes WHERE slug = 'arien'), (SELECT id FROM roles WHERE name = 'Pusher'), 4);

-- Brogan: Durable, Disabler, Pusher, Farming
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'brogan'), (SELECT id FROM roles WHERE name = 'Durable'), 1),
  ((SELECT id FROM heroes WHERE slug = 'brogan'), (SELECT id FROM roles WHERE name = 'Disabler'), 2),
  ((SELECT id FROM heroes WHERE slug = 'brogan'), (SELECT id FROM roles WHERE name = 'Pusher'), 3),
  ((SELECT id FROM heroes WHERE slug = 'brogan'), (SELECT id FROM roles WHERE name = 'Farming'), 4);

-- Dodger: Farming, Disabler, Damager, Sniper, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'dodger'), (SELECT id FROM roles WHERE name = 'Farming'), 1),
  ((SELECT id FROM heroes WHERE slug = 'dodger'), (SELECT id FROM roles WHERE name = 'Disabler'), 2),
  ((SELECT id FROM heroes WHERE slug = 'dodger'), (SELECT id FROM roles WHERE name = 'Damager'), 3),
  ((SELECT id FROM heroes WHERE slug = 'dodger'), (SELECT id FROM roles WHERE name = 'Sniper'), 4),
  ((SELECT id FROM heroes WHERE slug = 'dodger'), (SELECT id FROM roles WHERE name = 'Pusher'), 5);

-- Sabina: Tactician, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'sabina'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'sabina'), (SELECT id FROM roles WHERE name = 'Pusher'), 2);

-- Tigerclaw: Melee, Disabler, Farming
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'tigerclaw'), (SELECT id FROM roles WHERE name = 'Melee'), 1),
  ((SELECT id FROM heroes WHERE slug = 'tigerclaw'), (SELECT id FROM roles WHERE name = 'Disabler'), 2),
  ((SELECT id FROM heroes WHERE slug = 'tigerclaw'), (SELECT id FROM roles WHERE name = 'Farming'), 3);

-- Wasp: Disabler, Tactician, Sniper
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'wasp'), (SELECT id FROM roles WHERE name = 'Disabler'), 1),
  ((SELECT id FROM heroes WHERE slug = 'wasp'), (SELECT id FROM roles WHERE name = 'Tactician'), 2),
  ((SELECT id FROM heroes WHERE slug = 'wasp'), (SELECT id FROM roles WHERE name = 'Sniper'), 3);

-- Xargatha: Durable, Sniper, Tactician, Pusher, Disabler
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'xargatha'), (SELECT id FROM roles WHERE name = 'Durable'), 1),
  ((SELECT id FROM heroes WHERE slug = 'xargatha'), (SELECT id FROM roles WHERE name = 'Sniper'), 2),
  ((SELECT id FROM heroes WHERE slug = 'xargatha'), (SELECT id FROM roles WHERE name = 'Tactician'), 3),
  ((SELECT id FROM heroes WHERE slug = 'xargatha'), (SELECT id FROM roles WHERE name = 'Pusher'), 4),
  ((SELECT id FROM heroes WHERE slug = 'xargatha'), (SELECT id FROM roles WHERE name = 'Disabler'), 5);

-- ============================================
-- ARCANE COLLECTION HERO ROLES
-- ============================================

-- Gydion: Damager, Pusher, Sniper, Tactician, Farming, Tokens
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Damager'), 1),
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Pusher'), 2),
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Sniper'), 3),
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Tactician'), 4),
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Farming'), 5),
  ((SELECT id FROM heroes WHERE slug = 'gydion'), (SELECT id FROM roles WHERE name = 'Tokens'), 6);

-- Mrak: Disabler, Tactician, Melee, Tokens, Durable
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'mrak'), (SELECT id FROM roles WHERE name = 'Disabler'), 1),
  ((SELECT id FROM heroes WHERE slug = 'mrak'), (SELECT id FROM roles WHERE name = 'Tactician'), 2),
  ((SELECT id FROM heroes WHERE slug = 'mrak'), (SELECT id FROM roles WHERE name = 'Melee'), 3),
  ((SELECT id FROM heroes WHERE slug = 'mrak'), (SELECT id FROM roles WHERE name = 'Tokens'), 4),
  ((SELECT id FROM heroes WHERE slug = 'mrak'), (SELECT id FROM roles WHERE name = 'Durable'), 5);

-- Razzle: Tactician, Melee
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'razzle'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'razzle'), (SELECT id FROM roles WHERE name = 'Melee'), 2);

-- Rowenna: Farming, Melee, Durable, Pusher, Tactician, Healer
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Farming'), 1),
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Melee'), 2),
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Durable'), 3),
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Pusher'), 4),
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Tactician'), 5),
  ((SELECT id FROM heroes WHERE slug = 'rowenna'), (SELECT id FROM roles WHERE name = 'Healer'), 6);

-- Snorri: Damager, Sniper, Farming, Durable, Pusher, Healer
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Damager'), 1),
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Sniper'), 2),
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Farming'), 3),
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Durable'), 4),
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Pusher'), 5),
  ((SELECT id FROM heroes WHERE slug = 'snorri'), (SELECT id FROM roles WHERE name = 'Healer'), 6);

-- ============================================
-- DEFIANT COLLECTION HERO ROLES
-- ============================================

-- Bain: Farming, Durable, Tactician, Sniper, Healer
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'bain'), (SELECT id FROM roles WHERE name = 'Farming'), 1),
  ((SELECT id FROM heroes WHERE slug = 'bain'), (SELECT id FROM roles WHERE name = 'Durable'), 2),
  ((SELECT id FROM heroes WHERE slug = 'bain'), (SELECT id FROM roles WHERE name = 'Tactician'), 3),
  ((SELECT id FROM heroes WHERE slug = 'bain'), (SELECT id FROM roles WHERE name = 'Sniper'), 4),
  ((SELECT id FROM heroes WHERE slug = 'bain'), (SELECT id FROM roles WHERE name = 'Healer'), 5);

-- Cutter: Tactician, Damager, Farming
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'cutter'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'cutter'), (SELECT id FROM roles WHERE name = 'Damager'), 2),
  ((SELECT id FROM heroes WHERE slug = 'cutter'), (SELECT id FROM roles WHERE name = 'Farming'), 3);

-- Garrus: Disabler, Durable, Tactician
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'garrus'), (SELECT id FROM roles WHERE name = 'Disabler'), 1),
  ((SELECT id FROM heroes WHERE slug = 'garrus'), (SELECT id FROM roles WHERE name = 'Durable'), 2),
  ((SELECT id FROM heroes WHERE slug = 'garrus'), (SELECT id FROM roles WHERE name = 'Tactician'), 3);

-- Nebkher: Disabler, Tokens, Sniper
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'nebkher'), (SELECT id FROM roles WHERE name = 'Disabler'), 1),
  ((SELECT id FROM heroes WHERE slug = 'nebkher'), (SELECT id FROM roles WHERE name = 'Tokens'), 2),
  ((SELECT id FROM heroes WHERE slug = 'nebkher'), (SELECT id FROM roles WHERE name = 'Sniper'), 3);

-- Trinkets: Sniper, Damager, Pusher, Tokens
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'trinkets'), (SELECT id FROM roles WHERE name = 'Sniper'), 1),
  ((SELECT id FROM heroes WHERE slug = 'trinkets'), (SELECT id FROM roles WHERE name = 'Damager'), 2),
  ((SELECT id FROM heroes WHERE slug = 'trinkets'), (SELECT id FROM roles WHERE name = 'Pusher'), 3),
  ((SELECT id FROM heroes WHERE slug = 'trinkets'), (SELECT id FROM roles WHERE name = 'Tokens'), 4);

-- ============================================
-- DEVOTED COLLECTION HERO ROLES
-- ============================================

-- Misa: Tactician, Durable, Damager
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'misa'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'misa'), (SELECT id FROM roles WHERE name = 'Durable'), 2),
  ((SELECT id FROM heroes WHERE slug = 'misa'), (SELECT id FROM roles WHERE name = 'Damager'), 3);

-- Silverarrow: Healer, Farming, Sniper, Damager, Disabler
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'silverarrow'), (SELECT id FROM roles WHERE name = 'Healer'), 1),
  ((SELECT id FROM heroes WHERE slug = 'silverarrow'), (SELECT id FROM roles WHERE name = 'Farming'), 2),
  ((SELECT id FROM heroes WHERE slug = 'silverarrow'), (SELECT id FROM roles WHERE name = 'Sniper'), 3),
  ((SELECT id FROM heroes WHERE slug = 'silverarrow'), (SELECT id FROM roles WHERE name = 'Damager'), 4),
  ((SELECT id FROM heroes WHERE slug = 'silverarrow'), (SELECT id FROM roles WHERE name = 'Disabler'), 5);

-- Tali: Durable, Tokens, Damager, Pusher, Healer
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'tali'), (SELECT id FROM roles WHERE name = 'Durable'), 1),
  ((SELECT id FROM heroes WHERE slug = 'tali'), (SELECT id FROM roles WHERE name = 'Tokens'), 2),
  ((SELECT id FROM heroes WHERE slug = 'tali'), (SELECT id FROM roles WHERE name = 'Damager'), 3),
  ((SELECT id FROM heroes WHERE slug = 'tali'), (SELECT id FROM roles WHERE name = 'Pusher'), 4),
  ((SELECT id FROM heroes WHERE slug = 'tali'), (SELECT id FROM roles WHERE name = 'Healer'), 5);

-- Ursafar: Durable, Pusher, Farming, Melee
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'ursafar'), (SELECT id FROM roles WHERE name = 'Durable'), 1),
  ((SELECT id FROM heroes WHERE slug = 'ursafar'), (SELECT id FROM roles WHERE name = 'Pusher'), 2),
  ((SELECT id FROM heroes WHERE slug = 'ursafar'), (SELECT id FROM roles WHERE name = 'Farming'), 3),
  ((SELECT id FROM heroes WHERE slug = 'ursafar'), (SELECT id FROM roles WHERE name = 'Melee'), 4);

-- Whisper: Damager, Durable, Tactician, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'whisper'), (SELECT id FROM roles WHERE name = 'Damager'), 1),
  ((SELECT id FROM heroes WHERE slug = 'whisper'), (SELECT id FROM roles WHERE name = 'Durable'), 2),
  ((SELECT id FROM heroes WHERE slug = 'whisper'), (SELECT id FROM roles WHERE name = 'Tactician'), 3),
  ((SELECT id FROM heroes WHERE slug = 'whisper'), (SELECT id FROM roles WHERE name = 'Pusher'), 4);

-- ============================================
-- RENOWNED COLLECTION HERO ROLES
-- ============================================

-- Hanu: Tactician, Sniper, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'hanu'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'hanu'), (SELECT id FROM roles WHERE name = 'Sniper'), 2),
  ((SELECT id FROM heroes WHERE slug = 'hanu'), (SELECT id FROM roles WHERE name = 'Pusher'), 3);

-- Ignatia: Sniper, Damager, Tokens, Tactician, Pusher
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'ignatia'), (SELECT id FROM roles WHERE name = 'Sniper'), 1),
  ((SELECT id FROM heroes WHERE slug = 'ignatia'), (SELECT id FROM roles WHERE name = 'Damager'), 2),
  ((SELECT id FROM heroes WHERE slug = 'ignatia'), (SELECT id FROM roles WHERE name = 'Tokens'), 3),
  ((SELECT id FROM heroes WHERE slug = 'ignatia'), (SELECT id FROM roles WHERE name = 'Tactician'), 4),
  ((SELECT id FROM heroes WHERE slug = 'ignatia'), (SELECT id FROM roles WHERE name = 'Pusher'), 5);

-- Min: Tokens, Disabler, Damager, Melee
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'min'), (SELECT id FROM roles WHERE name = 'Tokens'), 1),
  ((SELECT id FROM heroes WHERE slug = 'min'), (SELECT id FROM roles WHERE name = 'Disabler'), 2),
  ((SELECT id FROM heroes WHERE slug = 'min'), (SELECT id FROM roles WHERE name = 'Damager'), 3),
  ((SELECT id FROM heroes WHERE slug = 'min'), (SELECT id FROM roles WHERE name = 'Melee'), 4);

-- Swift: Sniper, Farming, Tactician
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'swift'), (SELECT id FROM roles WHERE name = 'Sniper'), 1),
  ((SELECT id FROM heroes WHERE slug = 'swift'), (SELECT id FROM roles WHERE name = 'Farming'), 2),
  ((SELECT id FROM heroes WHERE slug = 'swift'), (SELECT id FROM roles WHERE name = 'Tactician'), 3);

-- Wuk: Sniper, Tactician, Tokens, Pusher, Durable, Healer
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Sniper'), 1),
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Tactician'), 2),
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Tokens'), 3),
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Pusher'), 4),
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Durable'), 5),
  ((SELECT id FROM heroes WHERE slug = 'wuk'), (SELECT id FROM roles WHERE name = 'Healer'), 6);

-- ============================================
-- WAYWARD COLLECTION HERO ROLES
-- ============================================

-- Brynn: Tactician, Damager, Durable
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'brynn'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'brynn'), (SELECT id FROM roles WHERE name = 'Damager'), 2),
  ((SELECT id FROM heroes WHERE slug = 'brynn'), (SELECT id FROM roles WHERE name = 'Durable'), 3);

-- Emmitt: Melee, Tactician, Durable, Disabler, Tokens
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'emmitt'), (SELECT id FROM roles WHERE name = 'Melee'), 1),
  ((SELECT id FROM heroes WHERE slug = 'emmitt'), (SELECT id FROM roles WHERE name = 'Tactician'), 2),
  ((SELECT id FROM heroes WHERE slug = 'emmitt'), (SELECT id FROM roles WHERE name = 'Durable'), 3),
  ((SELECT id FROM heroes WHERE slug = 'emmitt'), (SELECT id FROM roles WHERE name = 'Disabler'), 4),
  ((SELECT id FROM heroes WHERE slug = 'emmitt'), (SELECT id FROM roles WHERE name = 'Tokens'), 5);

-- Mortimer: Durable, Pusher, Melee, Tokens, Farming
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'mortimer'), (SELECT id FROM roles WHERE name = 'Durable'), 1),
  ((SELECT id FROM heroes WHERE slug = 'mortimer'), (SELECT id FROM roles WHERE name = 'Pusher'), 2),
  ((SELECT id FROM heroes WHERE slug = 'mortimer'), (SELECT id FROM roles WHERE name = 'Melee'), 3),
  ((SELECT id FROM heroes WHERE slug = 'mortimer'), (SELECT id FROM roles WHERE name = 'Tokens'), 4),
  ((SELECT id FROM heroes WHERE slug = 'mortimer'), (SELECT id FROM roles WHERE name = 'Farming'), 5);

-- Widget: Tactician, Pusher, Damager
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'widget'), (SELECT id FROM roles WHERE name = 'Tactician'), 1),
  ((SELECT id FROM heroes WHERE slug = 'widget'), (SELECT id FROM roles WHERE name = 'Pusher'), 2),
  ((SELECT id FROM heroes WHERE slug = 'widget'), (SELECT id FROM roles WHERE name = 'Damager'), 3);

-- Takahide: Damager, Farming, Durable, Sniper, Tactician
INSERT INTO hero_roles (hero_id, role_id, priority) VALUES
  ((SELECT id FROM heroes WHERE slug = 'takahide'), (SELECT id FROM roles WHERE name = 'Damager'), 1),
  ((SELECT id FROM heroes WHERE slug = 'takahide'), (SELECT id FROM roles WHERE name = 'Farming'), 2),
  ((SELECT id FROM heroes WHERE slug = 'takahide'), (SELECT id FROM roles WHERE name = 'Durable'), 3),
  ((SELECT id FROM heroes WHERE slug = 'takahide'), (SELECT id FROM roles WHERE name = 'Sniper'), 4),
  ((SELECT id FROM heroes WHERE slug = 'takahide'), (SELECT id FROM roles WHERE name = 'Tactician'), 5);
