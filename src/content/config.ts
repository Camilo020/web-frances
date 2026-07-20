import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        // i18n keys
        translationKey: z.string(),
        lang: z.enum(['es', 'en', 'fr']),

        title: z.string(),
        titleFr: z.string().optional(),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        cover: z.string().optional(),
        coverAlt: z.string().optional(),
        tags: z.array(z.string()),
        category: z.enum(['Aprendizaje', 'Certificaciones', 'Cultura', 'Pronunciación', 'Gramática']),
        readingTime: z.number().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog: blogCollection,
};
