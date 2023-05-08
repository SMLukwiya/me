import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import {
  articleCreateSchema,
  articleUpdateSchema,
} from "@/schemas/article.schema";

export const articlesRouter = createTRPCRouter({
  read: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.prisma.article.findUnique({
        where: { id: input.id },
      });
      return response;
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const articles = await ctx.prisma.article.findMany();
    return articles;
  }),
  create: protectedProcedure
    .input(articleCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, description, content, authorName, tags } = input;
      const response = await ctx.prisma.article.create({
        data: {
          title,
          description,
          content,
          authorName,
          tags,
        },
      });
      return response.id;
    }),
  update: protectedProcedure
    .input(articleUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, title, description, content, authorName } = input;
      const response = await ctx.prisma.article.update({
        where: { id },
        data: {
          title,
          description,
          content,
          authorName,
        },
      });
      return response;
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const response = await ctx.prisma.article.delete({
        where: { id: input.id },
      });
      return response.id;
    }),
});
