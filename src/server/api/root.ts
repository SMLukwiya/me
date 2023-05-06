import { createTRPCRouter } from "@/server/api/trpc";
import {
  deepDivesRouter,
  articlesRouter,
  projectRouter,
  quotesRouter,
} from "./routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  deepDives: deepDivesRouter,
  articles: articlesRouter,
  projects: projectRouter,
  quotes: quotesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
