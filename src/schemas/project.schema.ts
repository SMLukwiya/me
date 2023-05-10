import { z } from "zod";

export const projectTagSchema = z.enum(["community", "personal"]);

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  githubLink: z.string().nullable(),
  liveLink: z.string().nullable(),
  tag: projectTagSchema,
});

export const projectCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
  githubLink: z.string().optional(),
  liveLink: z.string().optional(),
  tag: projectTagSchema,
});

export const projectUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  githubLink: z.string().optional(),
  liveLink: z.string().optional(),
  tag: projectTagSchema,
});

export const projectListSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
export type ProjectRequest = z.infer<typeof projectCreateSchema>;
export type ProjectUpdate = z.infer<typeof projectUpdateSchema>;
export type ProjectList = z.infer<typeof projectListSchema>;
export type Project_Tag = z.infer<typeof projectTagSchema>;
