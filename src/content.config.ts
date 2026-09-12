import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().max(180),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['Frameworks', 'Software Design', 'AI', 'Industry', 'Career', 'Field Notes']),
    tags: z.array(z.string()).default([]),
    cover: image(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    draft: z.boolean().default(false)
  })
});

const learn = defineCollection({
  loader: glob({ base: './src/content/learn', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    week: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string().max(220),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts, learn };
