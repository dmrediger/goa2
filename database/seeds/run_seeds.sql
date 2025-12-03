-- Master Seed Runner
-- Description: Run all seed files in order
-- Usage: psql -d your_database -f run_seeds.sql

-- Ensure we start fresh (optional - comment out if you want to preserve data)
-- TRUNCATE TABLE spellbook_cards, cards, hero_roles, heroes, roles, collections RESTART IDENTITY CASCADE;

\echo 'Running seed 001: Collections...'
\i 001_collections.sql

\echo 'Running seed 002: Roles...'
\i 002_roles.sql

\echo 'Running seed 003: Heroes...'
\i 003_heroes.sql

\echo 'Running seed 004: Hero Roles...'
\i 004_hero_roles.sql

\echo 'Running seed 005: Sample Cards...'
\i 005_sample_cards.sql

\echo 'Running seed 006: Spellbook Cards...'
\i 006_spellbook_cards.sql

\echo 'All seeds completed successfully!'

-- Verify counts
SELECT 'Collections' as table_name, COUNT(*) as count FROM collections
UNION ALL
SELECT 'Roles', COUNT(*) FROM roles
UNION ALL
SELECT 'Heroes', COUNT(*) FROM heroes
UNION ALL
SELECT 'Hero Roles', COUNT(*) FROM hero_roles
UNION ALL
SELECT 'Cards', COUNT(*) FROM cards
UNION ALL
SELECT 'Spellbook Cards', COUNT(*) FROM spellbook_cards;
