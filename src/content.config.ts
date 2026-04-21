import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    organization: z.string().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    position: z.number().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { portfolio };
