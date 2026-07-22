import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live as markdown in src/content/blog/*.md.
// The file id (filename without extension) is the URL slug.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
