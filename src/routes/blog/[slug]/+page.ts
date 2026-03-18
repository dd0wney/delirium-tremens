import { error } from '@sveltejs/kit';
import { chapters } from '$lib/data/chapters';
import type { Chapter } from '$lib/types';

// Slugs that have their own file-based .svx routes and don't need
// to be served by this dynamic [slug] route.
const FILE_BASED_SLUGS = new Set([
    'introduction',
    'arrays',
    'strings',
    'linked-lists',
    'primitive-types',
    'references'
]);

export function load({ params }): { article: Chapter; prevArticle: Chapter | null; nextArticle: Chapter | null } {
    const idx = chapters.findIndex(c => c.slug === params.slug);
    if (idx === -1) {
        throw error(404, 'Article not found');
    }

    return {
        article: chapters[idx],
        prevArticle: chapters[idx - 1] ?? null,
        nextArticle: chapters[idx + 1] ?? null
    };
}

export function entries() {
    return chapters
        .filter(c => !FILE_BASED_SLUGS.has(c.slug))
        .map(c => ({ slug: c.slug }));
}
