import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { chapters } from '$lib/data/chapters';
import { base } from '$app/paths';

export const load: LayoutLoad = ({ url }) => {
	const path = url.pathname.replace(base, '');

	// Extract slug from blog path
	const match = path.match(/^\/blog\/([^/]+)/);
	const slug = match?.[1];

	if (!slug) {
		return { chapters };
	}

	const chapter = chapters.find((c) => c.slug === slug);
	if (!chapter) {
		return { chapters };
	}

	const idx = chapters.indexOf(chapter);
	return {
		chapters,
		chapter,
		prevChapter: chapters[idx - 1] ?? null,
		nextChapter: chapters[idx + 1] ?? null
	};
};

export const prerender = true;
export const trailingSlash = 'always'; 