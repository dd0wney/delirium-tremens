import { error } from '@sveltejs/kit';
import { chapters } from '$lib/data/chapters';

export const entries = () => chapters.map((c) => ({ slug: c.slug }));

export function load({ params }) {
	const chapter = chapters.find(c => c.slug === params.slug);
	
	if (!chapter) {
		throw error(404, 'Chapter not found');
	}

	const article = {
		title: chapter.title,
		description: chapter.description || `Deep dive into ${chapter.title.toLowerCase()} with practical examples and interview-focused solutions.`,
		slug: chapter.slug,
		date: chapter.date || "2024-03-20",
		readingTime: "10 min read",
		category: chapter.category || "Uncategorized",
		tags: chapter.tags || [],
		chapter: chapter.chapter
	};

	return {
		article
	};
} 