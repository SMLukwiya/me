import { z } from "zod";

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  authorName: z.string(),
  tags: z.string().nullable(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const articleCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  tags: z.string().optional(),
  authorName: z.string(),
});

export const articleUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  authorName: z.string(),
  tags: z.string().optional(),
});

export type ArticleRequest = z.infer<typeof articleCreateSchema>;
export type ArticleUpdate = z.infer<typeof articleUpdateSchema>;
export type ArticleResponse = z.infer<typeof articleSchema>;
