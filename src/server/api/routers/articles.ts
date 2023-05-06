import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const articlesRouter = createTRPCRouter({
  read: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx }) => {}),
  list: publicProcedure.query(({ ctx }) => {}),
  create: protectedProcedure.input(z.object({})).mutation(({ ctx }) => {}),
  update: protectedProcedure.input(z.object({})).mutation(({}) => {}),
  delete: protectedProcedure.input(z.object({})).mutation(({}) => {}),
});
