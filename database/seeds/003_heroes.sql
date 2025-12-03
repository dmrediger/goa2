-- Seed: 003_heroes.sql
-- Description: Seed data for all 32 heroes
-- Stats are on a 1-8 scale based on filled pips on hero cards

-- ============================================
-- BASE COLLECTION (8 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Arien', 'arien', (SELECT id FROM collections WHERE name = 'Base'), 1, 3, 5, 4, 5, 'Hero Cards/Base/Arien/Arien 0.JPEG', 'Hero Cards/Base/Arien/Arien 20.JPEG', 'Hero Cards/Base/Arien', FALSE, 21),
  ('Brogan', 'brogan', (SELECT id FROM collections WHERE name = 'Base'), 1, 7, 7, 3, 3, 'Hero Cards/Base/Brogan/Brogan 0.JPEG', 'Hero Cards/Base/Brogan/Brogan 20.JPEG', 'Hero Cards/Base/Brogan', FALSE, 21),
  ('Dodger', 'dodger', (SELECT id FROM collections WHERE name = 'Base'), 1, 5, 4, 6, 6, 'Hero Cards/Base/Dodger/Dodger 0.JPEG', 'Hero Cards/Base/Dodger/Dodger 20.JPEG', 'Hero Cards/Base/Dodger', FALSE, 21),
  ('Sabina', 'sabina', (SELECT id FROM collections WHERE name = 'Base'), 1, 4, 5, 6, 5, 'Hero Cards/Base/Sabina/Sabina 0.JPEG', 'Hero Cards/Base/Sabina/Sabina 20.JPEG', 'Hero Cards/Base/Sabina', FALSE, 21),
  ('Tigerclaw', 'tigerclaw', (SELECT id FROM collections WHERE name = 'Base'), 1, 6, 4, 6, 6, 'Hero Cards/Base/Tigerclaw/Tigerclaw 0.JPEG', 'Hero Cards/Base/Tigerclaw/Tigerclaw 20.JPEG', 'Hero Cards/Base/Tigerclaw', FALSE, 21),
  ('Wasp', 'wasp', (SELECT id FROM collections WHERE name = 'Base'), 1, 3, 4, 5, 4, 'Hero Cards/Base/Wasp/Wasp 0.JPEG', 'Hero Cards/Base/Wasp/Wasp 20.JPEG', 'Hero Cards/Base/Wasp', FALSE, 21),
  ('Xargatha', 'xargatha', (SELECT id FROM collections WHERE name = 'Base'), 1, 6, 7, 4, 5, 'Hero Cards/Base/Xargatha/Xargatha 0.JPEG', 'Hero Cards/Base/Xargatha/Xargatha 20.JPEG', 'Hero Cards/Base/Xargatha', FALSE, 21);

-- ============================================
-- ARCANE COLLECTION (5 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Gydion', 'gydion', (SELECT id FROM collections WHERE name = 'Arcane'), 3, 3, 2, 4, 5, 'Hero Cards/Arcane/Gydion/Gydion 0.JPEG', 'Hero Cards/Arcane/Gydion/Gydion 20.JPEG', 'Hero Cards/Arcane/Gydion', TRUE, 21),
  ('Mrak', 'mrak', (SELECT id FROM collections WHERE name = 'Arcane'), 2, 6, 6, 4, 4, 'Hero Cards/Arcane/Mrak/Mrak 0.JPEG', 'Hero Cards/Arcane/Mrak/Mrak 20.JPEG', 'Hero Cards/Arcane/Mrak', FALSE, 21),
  ('Razzle', 'razzle', (SELECT id FROM collections WHERE name = 'Arcane'), 3, 3, 3, 6, 6, 'Hero Cards/Arcane/Razzle/Razzle 0.JPEG', 'Hero Cards/Arcane/Razzle/Razzle 20.JPEG', 'Hero Cards/Arcane/Razzle', FALSE, 21),
  ('Rowenna', 'rowenna', (SELECT id FROM collections WHERE name = 'Arcane'), 2, 6, 6, 3, 4, 'Hero Cards/Arcane/Rowenna/Rowenna 0.JPEG', 'Hero Cards/Arcane/Rowenna/Rowenna 20.JPEG', 'Hero Cards/Arcane/Rowenna', FALSE, 21),
  ('Snorri', 'snorri', (SELECT id FROM collections WHERE name = 'Arcane'), 3, 4, 5, 5, 3, 'Hero Cards/Arcane/Snorri/Snorri 0.JPEG', 'Hero Cards/Arcane/Snorri/Snorri 20.JPEG', 'Hero Cards/Arcane/Snorri', FALSE, 21);

-- ============================================
-- DEFIANT COLLECTION (5 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Bain', 'bain', (SELECT id FROM collections WHERE name = 'Defiant'), 2, 5, 5, 5, 5, 'Hero Cards/Defiant/Bain/Bain 0.JPEG', 'Hero Cards/Defiant/Bain/Bain 20.JPEG', 'Hero Cards/Defiant/Bain', FALSE, 21),
  ('Cutter', 'cutter', (SELECT id FROM collections WHERE name = 'Defiant'), 2, 5, 5, 5, 5, 'Hero Cards/Defiant/Cutter/Cutter 0.JPEG', 'Hero Cards/Defiant/Cutter/Cutter 20.JPEG', 'Hero Cards/Defiant/Cutter', FALSE, 21),
  ('Garrus', 'garrus', (SELECT id FROM collections WHERE name = 'Defiant'), 2, 6, 7, 3, 5, 'Hero Cards/Defiant/Garrus/Garrus 0.JPEG', 'Hero Cards/Defiant/Garrus/Garrus 20.JPEG', 'Hero Cards/Defiant/Garrus', FALSE, 21),
  ('Nebkher', 'nebkher', (SELECT id FROM collections WHERE name = 'Defiant'), 3, 5, 5, 5, 6, 'Hero Cards/Defiant/Nebkher/Nebkher 0.JPEG', 'Hero Cards/Defiant/Nebkher/Nebkher 20.JPEG', 'Hero Cards/Defiant/Nebkher', FALSE, 21),
  ('Trinkets', 'trinkets', (SELECT id FROM collections WHERE name = 'Defiant'), 2, 5, 5, 3, 4, 'Hero Cards/Defiant/Trinkets/Trinkets 0.JPEG', 'Hero Cards/Defiant/Trinkets/Trinkets 20.JPEG', 'Hero Cards/Defiant/Trinkets', FALSE, 21);

-- ============================================
-- DEVOTED COLLECTION (5 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Misa', 'misa', (SELECT id FROM collections WHERE name = 'Devoted'), 2, 7, 7, 4, 5, 'Hero Cards/Devoted/Misa/Misa 0.JPEG', 'Hero Cards/Devoted/Misa/Misa 20.JPEG', 'Hero Cards/Devoted/Misa', FALSE, 21),
  ('Silverarrow', 'silverarrow', (SELECT id FROM collections WHERE name = 'Devoted'), 2, 3, 3, 6, 6, 'Hero Cards/Devoted/Silverarrow/Silverarrow 0.JPEG', 'Hero Cards/Devoted/Silverarrow/Silverarrow 20.JPEG', 'Hero Cards/Devoted/Silverarrow', FALSE, 21),
  ('Tali', 'tali', (SELECT id FROM collections WHERE name = 'Devoted'), 2, 4, 5, 4, 3, 'Hero Cards/Devoted/Tali/Tali 0.JPEG', 'Hero Cards/Devoted/Tali/Tali 20.JPEG', 'Hero Cards/Devoted/Tali', FALSE, 21),
  ('Ursafar', 'ursafar', (SELECT id FROM collections WHERE name = 'Devoted'), 2, 4, 5, 3, 3, 'Hero Cards/Devoted/Ursafar/Ursafar 0.JPEG', 'Hero Cards/Devoted/Ursafar/Ursafar 20.JPEG', 'Hero Cards/Devoted/Ursafar', FALSE, 21),
  ('Whisper', 'whisper', (SELECT id FROM collections WHERE name = 'Devoted'), 2, 7, 7, 5, 6, 'Hero Cards/Devoted/Whisper/Whisper 0.JPEG', 'Hero Cards/Devoted/Whisper/Whisper 20.JPEG', 'Hero Cards/Devoted/Whisper', FALSE, 21);

-- ============================================
-- RENOWNED COLLECTION (5 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Hanu', 'hanu', (SELECT id FROM collections WHERE name = 'Renowned'), 2, 4, 4, 4, 5, 'Hero Cards/Renowned/Hanu/Hanu 0.JPEG', 'Hero Cards/Renowned/Hanu/Hanu 20.JPEG', 'Hero Cards/Renowned/Hanu', FALSE, 21),
  ('Ignatia', 'ignatia', (SELECT id FROM collections WHERE name = 'Renowned'), 3, 6, 6, 4, 3, 'Hero Cards/Renowned/Ignatia/Ignatia 0.JPEG', 'Hero Cards/Renowned/Ignatia/Ignatia 20.JPEG', 'Hero Cards/Renowned/Ignatia', FALSE, 21),
  ('Min', 'min', (SELECT id FROM collections WHERE name = 'Renowned'), 2, 5, 5, 5, 5, 'Hero Cards/Renowned/Min/Min 0.JPEG', 'Hero Cards/Renowned/Min/Min 20.JPEG', 'Hero Cards/Renowned/Min', FALSE, 21),
  ('Swift', 'swift', (SELECT id FROM collections WHERE name = 'Renowned'), 2, 4, 3, 5, 4, 'Hero Cards/Renowned/Swift/Swift 0.JPEG', 'Hero Cards/Renowned/Swift/Swift 20.JPEG', 'Hero Cards/Renowned/Swift', FALSE, 21),
  ('Wuk', 'wuk', (SELECT id FROM collections WHERE name = 'Renowned'), 3, 5, 5, 4, 5, 'Hero Cards/Renowned/Wuk/Wuk 0.JPEG', 'Hero Cards/Renowned/Wuk/Wuk 20.JPEG', 'Hero Cards/Renowned/Wuk', FALSE, 21);

-- ============================================
-- WAYWARD COLLECTION (5 heroes)
-- ============================================

INSERT INTO heroes (name, slug, collection_id, complexity, attack, defense, initiative, movement, hero_card_image, card_back_image, folder_path, has_spellbook, deck_size) VALUES
  ('Brynn', 'brynn', (SELECT id FROM collections WHERE name = 'Wayward'), 2, 5, 5, 5, 6, 'Hero Cards/Wayward/Brynn/Brynn 0.JPEG', 'Hero Cards/Wayward/Brynn/Brynn 20.JPEG', 'Hero Cards/Wayward/Brynn', FALSE, 21),
  ('Emmitt', 'emmitt', (SELECT id FROM collections WHERE name = 'Wayward'), 3, 5, 5, 5, 5, 'Hero Cards/Wayward/Emmitt/Emmitt 0.JPEG', 'Hero Cards/Wayward/Emmitt/Emmitt 20.JPEG', 'Hero Cards/Wayward/Emmitt', FALSE, 21),
  ('Mortimer', 'mortimer', (SELECT id FROM collections WHERE name = 'Wayward'), 2, 6, 7, 3, 5, 'Hero Cards/Wayward/Mortimer/Mortimer 0.JPEG', 'Hero Cards/Wayward/Mortimer/Mortimer 20.JPEG', 'Hero Cards/Wayward/Mortimer', FALSE, 21),
  ('Widget', 'widget', (SELECT id FROM collections WHERE name = 'Wayward'), 2, 6, 5, 5, 3, 'Hero Cards/Wayward/Widget/Widget 0.JPEG', 'Hero Cards/Wayward/Widget/Widget 20.JPEG', 'Hero Cards/Wayward/Widget', FALSE, 21),
  ('Takahide', 'takahide', (SELECT id FROM collections WHERE name = 'Wayward'), 3, 5, 5, 5, 5, 'Hero Cards/Wayward/Takahide/Takahide 0.JPEG', 'Hero Cards/Wayward/Takahide/Takahide 22.JPEG', 'Hero Cards/Wayward/Takahide', FALSE, 23);
