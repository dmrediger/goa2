-- Seed: 002_roles.sql
-- Description: Seed data for roles lookup table

INSERT INTO roles (name, description) VALUES
  ('Tactician', 'Excels at controlling the battlefield and positioning'),
  ('Disabler', 'Specializes in hindering enemy movement and actions'),
  ('Durable', 'High survivability and defensive capabilities'),
  ('Pusher', 'Excels at displacing enemies and repositioning units'),
  ('Damager', 'High damage output and offensive capabilities'),
  ('Sniper', 'Specializes in ranged attacks and precision strikes'),
  ('Melee', 'Excels in close-quarters combat'),
  ('Tokens', 'Specializes in summoning and controlling tokens/minions'),
  ('Farming', 'Efficient at collecting resources and objectives'),
  ('Support', 'Provides buffs and assistance to allies'),
  ('Mobile', 'High movement capabilities and repositioning'),
  ('Zoner', 'Controls areas of the battlefield'),
  ('Healer', 'Restores health and removes negative effects');
