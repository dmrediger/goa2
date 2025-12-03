import { randomBytes } from "crypto";

import type { Hero, Class } from "../../../generated/prisma/client";

export interface Player {
  id: string;
  name: string;
}

export interface Teams {
  red: Player[];
  blue: Player[];
  redPicksFirst: boolean;
}

export interface HeroOption {
  id: number;
  name: string;
  slug: string;
  class: Class;
  collection: string;
  complexity: number;
  attack: number;
  defense: number;
  initiative: number;
  movement: number;
  heroCardImage: string;
}

export interface PlayerPick {
  playerId: string;
  playerName: string;
  team: "red" | "blue";
  heroOptions: HeroOption[];
  selectedHero: HeroOption | null;
}

export interface DraftState {
  teams: Teams;
  pickOrder: { playerId: string; playerName: string; team: "red" | "blue" }[];
  currentPickIndex: number;
  playerPicks: PlayerPick[];
  availableHeroes: HeroOption[];
  usedHeroIds: number[];
  isComplete: boolean;
}

// All 5 classes in the game
const ALL_CLASSES: Class[] = ["Tank", "Carry", "Support", "Controller", "Pusher"];

/**
 * Cryptographically secure random integer
 */
function cryptoRandomInt(max: number): number {
  const randomBuffer = randomBytes(4);
  const randomValue = randomBuffer.readUInt32BE(0);
  return randomValue % max;
}

/**
 * Cryptographically secure Fisher-Yates shuffle
 */
function cryptoShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = cryptoRandomInt(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

/**
 * Generate the pick order based on teams
 * Alternates between teams, starting with the team that picks first
 * Goes: Team1-P1, Team2-P1, Team1-P2, Team2-P2, etc.
 */
export function generatePickOrder(
  teams: Teams
): { playerId: string; playerName: string; team: "red" | "blue" }[] {
  const pickOrder: { playerId: string; playerName: string; team: "red" | "blue" }[] = [];

  const startingTeam = teams.redPicksFirst ? "red" : "blue";
  const secondTeam = teams.redPicksFirst ? "blue" : "red";

  const startingPlayers = teams.redPicksFirst ? teams.red : teams.blue;
  const secondPlayers = teams.redPicksFirst ? teams.blue : teams.red;

  const maxLength = Math.max(startingPlayers.length, secondPlayers.length);

  for (let i = 0; i < maxLength; i++) {
    // Starting team player
    if (i < startingPlayers.length) {
      const player = startingPlayers[i]!;
      pickOrder.push({
        playerId: player.id,
        playerName: player.name,
        team: startingTeam,
      });
    }

    // Second team player
    if (i < secondPlayers.length) {
      const player = secondPlayers[i]!;
      pickOrder.push({
        playerId: player.id,
        playerName: player.name,
        team: secondTeam,
      });
    }
  }

  return pickOrder;
}

/**
 * Select 3 heroes with different classes for a player
 * Ensures no hero is reused across the entire draft
 */
export function selectHeroOptionsForPlayer(
  availableHeroes: HeroOption[],
  usedHeroIds: number[]
): { selectedHeroes: HeroOption[]; remainingHeroes: HeroOption[] } {
  // Filter out already used heroes
  const unusedHeroes = availableHeroes.filter((h) => !usedHeroIds.includes(h.id));

  // Group by class
  const heroesByClass = new Map<Class, HeroOption[]>();
  for (const heroClass of ALL_CLASSES) {
    heroesByClass.set(heroClass, []);
  }
  for (const hero of unusedHeroes) {
    const classHeroes = heroesByClass.get(hero.class);
    if (classHeroes) {
      classHeroes.push(hero);
    }
  }

  // Shuffle each class pool
  for (const [heroClass, heroes] of heroesByClass) {
    heroesByClass.set(heroClass, cryptoShuffle(heroes));
  }

  // Pick 3 heroes from 3 different classes
  const selectedHeroes: HeroOption[] = [];
  const shuffledClasses = cryptoShuffle([...ALL_CLASSES]);

  for (const heroClass of shuffledClasses) {
    if (selectedHeroes.length >= 3) break;

    const classHeroes = heroesByClass.get(heroClass);
    if (classHeroes && classHeroes.length > 0) {
      const hero = classHeroes.shift()!;
      selectedHeroes.push(hero);
    }
  }

  // If we couldn't get 3 different classes, fill from remaining heroes
  if (selectedHeroes.length < 3) {
    const selectedIds = new Set(selectedHeroes.map((h) => h.id));
    const remainingUnused = unusedHeroes.filter((h) => !selectedIds.has(h.id));
    const shuffledRemaining = cryptoShuffle(remainingUnused);

    while (selectedHeroes.length < 3 && shuffledRemaining.length > 0) {
      selectedHeroes.push(shuffledRemaining.shift()!);
    }
  }

  // Calculate remaining heroes (excluding selected)
  const selectedIds = new Set(selectedHeroes.map((h) => h.id));
  const remainingHeroes = unusedHeroes.filter((h) => !selectedIds.has(h.id));

  return { selectedHeroes, remainingHeroes };
}

/**
 * Initialize a new draft with all hero options pre-generated
 */
export function initializeDraft(
  teams: Teams,
  allHeroes: HeroOption[]
): DraftState {
  const pickOrder = generatePickOrder(teams);
  const shuffledHeroes = cryptoShuffle(allHeroes);

  const playerPicks: PlayerPick[] = [];
  let availableHeroes = [...shuffledHeroes];
  const usedHeroIds: number[] = [];

  // Pre-generate hero options for all players
  for (const pick of pickOrder) {
    const { selectedHeroes, remainingHeroes } = selectHeroOptionsForPlayer(
      availableHeroes,
      usedHeroIds
    );

    // Mark these heroes as used (reserved for this player's options)
    for (const hero of selectedHeroes) {
      usedHeroIds.push(hero.id);
    }

    playerPicks.push({
      playerId: pick.playerId,
      playerName: pick.playerName,
      team: pick.team,
      heroOptions: selectedHeroes,
      selectedHero: null,
    });

    availableHeroes = remainingHeroes;
  }

  return {
    teams,
    pickOrder,
    currentPickIndex: 0,
    playerPicks,
    availableHeroes,
    usedHeroIds,
    isComplete: false,
  };
}

/**
 * Process a hero pick for the current player
 */
export function makeHeroPick(
  draftState: DraftState,
  heroId: number
): DraftState {
  const currentPick = draftState.playerPicks[draftState.currentPickIndex];
  if (!currentPick) {
    throw new Error("Invalid pick index");
  }

  const selectedHero = currentPick.heroOptions.find((h) => h.id === heroId);
  if (!selectedHero) {
    throw new Error("Hero not available for this player");
  }

  // Update the player's pick
  const updatedPlayerPicks = [...draftState.playerPicks];
  updatedPlayerPicks[draftState.currentPickIndex] = {
    ...currentPick,
    selectedHero,
  };

  const newPickIndex = draftState.currentPickIndex + 1;
  const isComplete = newPickIndex >= draftState.pickOrder.length;

  return {
    ...draftState,
    playerPicks: updatedPlayerPicks,
    currentPickIndex: newPickIndex,
    isComplete,
  };
}

/**
 * Convert Prisma Hero to HeroOption
 */
export function heroToHeroOption(hero: Hero): HeroOption {
  // Ensure heroCardImage has a leading slash for Next.js Image
  const heroCardImage = hero.heroCardImage.startsWith("/")
    ? hero.heroCardImage
    : `/${hero.heroCardImage}`;

  return {
    id: hero.id,
    name: hero.name,
    slug: hero.slug,
    class: hero.class,
    collection: hero.collection,
    complexity: hero.complexity,
    attack: hero.attack,
    defense: hero.defense,
    initiative: hero.initiative,
    movement: hero.movement,
    heroCardImage,
  };
}
