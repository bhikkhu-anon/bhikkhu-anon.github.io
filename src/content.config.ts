import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory.
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
		}),
});

export const collections = { posts };
