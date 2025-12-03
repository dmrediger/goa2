import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  randomizeTeams,
  validatePlayers,
} from "~/server/services/team.service";

const playerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
});

export const teamRouter = createTRPCRouter({
  /**
   * Randomizes players into two teams (Red/Atlantians and Blue/Titans)
   * Uses cryptographically secure randomization
   */
  randomize: publicProcedure
    .input(
      z.object({
        players: z.array(playerSchema).min(2, "At least 2 players required"),
      })
    )
    .mutation(({ input }) => {
      // Validate and filter players
      const validPlayers = validatePlayers(input.players);

      if (validPlayers.length < 2) {
        throw new Error("At least 2 valid players are required");
      }

      // Randomize teams using the service
      const teams = randomizeTeams(validPlayers);

      return teams;
    }),
});
