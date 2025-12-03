import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  initializeDraft,
  heroToHeroOption,
  type Teams,
  type DraftState,
} from "~/server/services/heroPick.service";

const playerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
});

const teamsSchema = z.object({
  red: z.array(playerSchema),
  blue: z.array(playerSchema),
  redPicksFirst: z.boolean(),
});

export const heroPickRouter = createTRPCRouter({
  /**
   * Initialize a new hero draft
   * Fetches all heroes from DB and generates options for all players
   */
  initializeDraft: publicProcedure
    .input(z.object({ teams: teamsSchema }))
    .mutation(async ({ ctx, input }) => {
      // Fetch all heroes from the database
      const heroes = await ctx.db.hero.findMany({
        orderBy: { name: "asc" },
      });

      if (heroes.length === 0) {
        throw new Error("No heroes found in database");
      }

      // Convert to HeroOptions
      const heroOptions = heroes.map(heroToHeroOption);

      // Initialize the draft
      const draftState = initializeDraft(input.teams as Teams, heroOptions);

      return draftState;
    }),

  /**
   * Get hero details by ID
   */
  getHero: publicProcedure
    .input(z.object({ heroId: z.number() }))
    .query(async ({ ctx, input }) => {
      const hero = await ctx.db.hero.findUnique({
        where: { id: input.heroId },
        include: {
          roles: {
            orderBy: { priority: "asc" },
          },
        },
      });

      if (!hero) {
        throw new Error("Hero not found");
      }

      return {
        ...heroToHeroOption(hero),
        roles: hero.roles.map((r) => r.role),
      };
    }),

  /**
   * Get all heroes (for testing/debug)
   */
  getAllHeroes: publicProcedure.query(async ({ ctx }) => {
    const heroes = await ctx.db.hero.findMany({
      orderBy: { name: "asc" },
      include: {
        roles: {
          orderBy: { priority: "asc" },
        },
      },
    });

    return heroes.map((hero) => ({
      ...heroToHeroOption(hero),
      roles: hero.roles.map((r) => r.role),
    }));
  }),
});

export type { DraftState };
