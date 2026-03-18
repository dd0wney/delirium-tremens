import { error } from '@sveltejs/kit';
import { articles } from '$lib/data/articles';
import { chapters } from '$lib/data/chapters';
import type { Article, Chapter } from '$lib/types';

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

export function load({ params }): { article: Article | Chapter } {
    const article = articles.find(a => a.slug === params.slug);
    if (article) {
        return { article };
    }

    const chapter = chapters.find(c => c.slug === params.slug);
    if (chapter) {
        return { article: chapter };
    }

    throw error(404, 'Article not found');
}

export function entries() {
    const articleSlugs = articles.map(a => ({ slug: a.slug }));
    const chapterSlugs = chapters
        .filter(c => !FILE_BASED_SLUGS.has(c.slug))
        .map(c => ({ slug: c.slug }));

    return [...articleSlugs, ...chapterSlugs];
}