import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkReadingTime from './src/lib/utils/reading-time.js';

const config = defineConfig({
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkReadingTime],
	rehypePlugins: [rehypeSlug],
	layout: {
		blog: './src/routes/blog/_markdown.svelte'
	}
});

export default config;
