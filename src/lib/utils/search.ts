import type { Chapter } from '$lib/types';

interface SearchResult {
  chapter: Chapter;
  score: number;
}

export function searchChapters(chapters: Chapter[], query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  return chapters
    .filter((c) => c.title.toLowerCase().includes(lowerQuery) || c.description.toLowerCase().includes(lowerQuery))
    .map((chapter) => ({ chapter, score: 1 }));
}
