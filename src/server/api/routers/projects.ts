import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { projectSchema, projectTagSchema } from "@/schemas/project.schema";

export const projectRouter = createTRPCRouter({
  read: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx }) => {
    return "Projects";
  }),
  list: publicProcedure
    .input(z.object({ tag: projectTagSchema }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.prisma.project.findMany({
        where: {
          tag: input.tag,
        },
      });
      return response;
    }),
  create: protectedProcedure.input(z.object({})).mutation(({ ctx }) => {}),
  update: protectedProcedure.input(z.object({})).mutation(({}) => {}),
  delete: protectedProcedure.input(z.object({})).mutation(({}) => {}),
});
