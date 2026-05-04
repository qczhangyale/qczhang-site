import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Pinned posts always appear above un-pinned ones in the blog index,
			// regardless of date. Pinned posts among themselves still sort by pubDate desc.
			pinned: z.boolean().optional().default(false),
			// Featured posts appear right after pinned posts in the "More posts"
			// grid (still in pubDate-desc order among themselves), ahead of the
			// purely date-sorted remainder. Use for editor's-pick promotion of
			// non-pinned posts you still want to surface near the top.
			featured: z.boolean().optional().default(false),
		}),
});

const papers = defineCollection({
	loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		shortTitle: z.string().optional(),
		doi: z.string(),
		date: z.coerce.date(),
		order: z.number(),
		category: z.enum(['synthesis', 'cosmology', 'method', 'twistor']),
		precision: z.string().optional(),
		description: z.string(),
		keyFormula: z.string().optional(),
	}),
});

export const collections = { blog, papers };
