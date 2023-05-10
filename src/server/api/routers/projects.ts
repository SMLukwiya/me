import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import {
  projectSchema,
  projectTagSchema,
  projectUpdateSchema,
} from "@/schemas/project.schema";
import { projectCreateSchema } from "@/schemas/project.schema";

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
  create: protectedProcedure
    .input(projectCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, description, githubLink, liveLink, tag } = input;
      const response = await ctx.prisma.project.create({
        data: {
          title,
          description,
          githubLink,
          liveLink,
          tag,
        },
      });

      return response;
    }),
  update: protectedProcedure
    .input(projectUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, title, description, githubLink, liveLink, tag } = input;
      const response = await ctx.prisma.project.update({
        where: { id },
        data: {
          title,
          description,
          tag,
          githubLink,
          liveLink,
        },
      });

      return response;
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const response = await ctx.prisma.project.delete({
        where: { id: input.id },
      });

      return response.id;
    }),
});
