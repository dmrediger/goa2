import { randomBytes } from "crypto";

export interface Player {
  id: string;
  name: string;
}

export interface RandomizedTeams {
  red: Player[];
  blue: Player[];
  redPicksFirst: boolean;
}

/**
 * Generates a cryptographically secure random number between 0 and max (exclusive)
 */
function cryptoRandomInt(max: number): number {
  const randomBuffer = randomBytes(4);
  const randomValue = randomBuffer.readUInt32BE(0);
  return randomValue % max;
}

/**
 * Generates a cryptographically secure random boolean
 */
function cryptoRandomBool(): boolean {
  const randomBuffer = randomBytes(1);
  return randomBuffer[0]! % 2 === 0;
}

/**
 * Cryptographically secure Fisher-Yates shuffle
 * Uses Node.js crypto module for server-side randomness
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
 * Randomizes players into two teams with the following rules:
 * 1. Players are shuffled using cryptographically secure RNG
 * 2. Teams are split as evenly as possible
 * 3. If odd number of players, one team randomly gets the extra player
 * 4. The order within each team determines pick order
 * 5. If teams are uneven, the larger team picks first
 * 6. If teams are even, pick order is randomized
 */
export function randomizeTeams(players: Player[]): RandomizedTeams {
  if (players.length < 2) {
    throw new Error("At least 2 players are required to form teams");
  }

  // Shuffle all players using crypto RNG
  const shuffled = cryptoShuffle(players);

  // Calculate team sizes
  const midpoint = Math.floor(shuffled.length / 2);
  const isOdd = shuffled.length % 2 !== 0;

  let red: Player[];
  let blue: Player[];

  if (isOdd) {
    // Randomly decide which team gets the extra player
    const extraToRed = cryptoRandomBool();

    if (extraToRed) {
      red = shuffled.slice(0, midpoint + 1);
      blue = shuffled.slice(midpoint + 1);
    } else {
      red = shuffled.slice(0, midpoint);
      blue = shuffled.slice(midpoint);
    }
  } else {
    // Even split
    red = shuffled.slice(0, midpoint);
    blue = shuffled.slice(midpoint);
  }

  // Determine who picks first
  // Rule: If odd number, the larger team picks first
  // Rule: If even, randomly decide
  let redPicksFirst: boolean;

  if (red.length > blue.length) {
    redPicksFirst = true;
  } else if (blue.length > red.length) {
    redPicksFirst = false;
  } else {
    redPicksFirst = cryptoRandomBool();
  }

  return {
    red,
    blue,
    redPicksFirst,
  };
}

/**
 * Validates that all players have valid names
 */
export function validatePlayers(players: Player[]): Player[] {
  return players.filter(
    (player) =>
      player.id &&
      typeof player.id === "string" &&
      player.name &&
      typeof player.name === "string" &&
      player.name.trim().length > 0
  );
}
