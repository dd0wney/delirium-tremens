import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: [rehypeSlug],
	layout: {
		blog: './src/routes/blog/_markdown.svelte'
	}
});

export default config;
