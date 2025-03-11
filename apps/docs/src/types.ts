import { z } from "zod";

// Schema for the _meta.json file at the root of each doc directory
export const docCategorySchema = z.object({
  title: z.string(),
  order: z.number(),
});

export type DocCategory = z.infer<typeof docCategorySchema>;

// Schema for the frontmatter of each document page
export const docMatterSchema = z.object({
  title: z.string(),
  order: z.number().nullish(),
  layout: z.literal("@/layouts/Doc.astro"),
});

export type DocMatter = z.infer<typeof docMatterSchema>;
