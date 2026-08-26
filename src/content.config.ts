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
		// Sort key WITHIN a series. TCG uses 1..42 (research-marathon order);
		// Complementarity-First uses 1..10 (Release I reading order). Always
		// filter by series before sorting on this field.
		order: z.number(),
		// Which research series the paper belongs to. Defaults to 'tcg' so the
		// 42 pre-existing stubs need no frontmatter change.
		series: z.enum(['cf', 'tcg']).optional().default('tcg'),
		// Which Foundational Release a Complementarity-First paper belongs to.
		// Release I (2026-08-18) is the grammar; Release II (2026-08-26) extends
		// it into time and electromagnetism. TCG papers have no release.
		release: z.union([z.literal(1), z.literal(2)]).optional(),
		// Internal release code (CF-F1, CFQF-Q4, CUD-G1, ...). Complementarity-First
		// papers cross-reference each other by these codes in the release overview,
		// so they are shown on cards and detail pages. TCG papers have none.
		code: z.string().optional(),
		category: z.enum([
			// TCG series
			'synthesis',
			'cosmology',
			'method',
			'twistor',
			'foundations',
			// Complementarity-First series
			'cf-foundation',
			'cf-quantum',
			'cf-gravity',
			'cf-synthesis',
			'cf-overview',
			// Complementarity-First — Release II
			'cf-time',
			'cf-electromagnetism',
			'cf-dataset',
		]),
		precision: z.string().optional(),
		description: z.string(),
		keyFormula: z.string().optional(),
	}),
});

export const collections = { blog, papers };
