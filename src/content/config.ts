import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
    category: z.string(),
    image: z
      .object({
        url: z.string().url(),
        alt: z.string()
      })
      .optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  blog
};
