import { base } from '$app/paths';
import type { Article, Chapter } from '$lib/types';

export function getArticleUrl(article: Article): string {
	return `${base}/blog/${article.slug}`;
}

export function getChapterUrl(chapter: Chapter): string {
	return `${base}/blog/${chapter.slug}`;
}

export function getSectionUrl(chapter: Chapter, sectionId: string): string {
	return `${base}/blog/${chapter.slug}#${sectionId}`;
}

export function getBlogUrl(): string {
	return `${base}/blog/`;
} 