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

export function load({ params }): { article: Chapter } {
    const chapter = chapters.find(c => c.slug === params.slug);
    if (chapter) {
        return { article: chapter };
    }

    throw error(404, 'Article not found');
}

export function entries() {
    return chapters
        .filter(c => !FILE_BASED_SLUGS.has(c.slug))
        .map(c => ({ slug: c.slug }));
}
