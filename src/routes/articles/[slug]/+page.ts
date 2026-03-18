import { error } from '@sveltejs/kit';
import { articles } from '$lib/data/articles';

export const entries = () => articles.map((a) => ({ slug: a.slug }));

export function load({ params }) {
	const article = articles.find(a => a.slug === params.slug);

	if (!article) {
		throw error(404, 'Article not found');
	}

	return { article };
} 