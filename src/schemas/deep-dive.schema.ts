import { z } from "zod";

export const deepDiveSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  categoryId: z.string(),
  content: z.string(),
  authorName: z.string(),
  tags: z.string().nullable(),
  slug: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const deepDiveCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string(),
  content: z.string(),
  slug: z.string(),
  tags: z.string().optional(),
  authorName: z.string(),
});

export const deepDiveUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  authorName: z.string(),
  slug: z.string(),
  tags: z.string().optional(),
});

export type DeepDiveRequest = z.infer<typeof deepDiveCreateSchema>;
export type DeepDiveUpdate = z.infer<typeof deepDiveUpdateSchema>;
export type DeepDiveResponse = z.infer<typeof deepDiveSchema>;
