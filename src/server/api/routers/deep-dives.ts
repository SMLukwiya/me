import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import {
  deepDiveCreateSchema,
  deepDiveUpdateSchema,
} from "@/schemas/deep-dive.schema";

export const deepDivesRouter = createTRPCRouter({
  // category
  createCategory: protectedProcedure
    .input(z.object({ category: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.prisma.deepDiveCategory.create({
        data: {
          name: input.category,
        },
      });

      return response;
    }),

  deleteCategory: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const response = await ctx.prisma.deepDiveCategory.delete({
        where: { id: input.id },
      });

      return response.id;
    }),

  listCategory: protectedProcedure.query(async ({ ctx }) => {
    const response = await ctx.prisma.deepDiveCategory.findMany();
    return response;
  }),
  // articles
  read: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.prisma.deepDiveArticle.findUnique({
        where: { id: input.id },
      });

      return response;
    }),

  list: publicProcedure
    .input(z.object({ categoryId: z.string() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.prisma.deepDiveArticle.findMany({
        where: { categoryId: input.categoryId },
        include: { category: true },
      });
      return response;
    }),

  create: protectedProcedure
    .input(deepDiveCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, description, categoryId, content, tags, authorName } =
        input;
      const response = await ctx.prisma.deepDiveArticle.create({
        data: {
          title,
          description,
          content,
          authorName,
          tags,
          category: {
            connect: { id: categoryId },
          },
        },
      });

      return response;
    }),

  update: protectedProcedure
    .input(deepDiveUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      const { id, title, description, content, authorName, tags } = input;
      const response = await ctx.prisma.deepDiveArticle.update({
        where: { id },
        data: {
          title,
          description,
          content,
          authorName,
          tags,
        },
      });

      return response;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const response = await ctx.prisma.deepDiveArticle.delete({
        where: { id: input.id },
      });

      return response.id;
    }),
});
