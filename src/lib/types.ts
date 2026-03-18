export interface Section {
  title: string;
  id: string;
}

export interface PageMetadata {
  title: string;
  chapter: number;
  category: string;
  date?: string;
  references?: string[];
}

export interface Reference {
  id: string;
  authors: string[];
  year: number;
  title: string;
  source: string;
  url?: string;
  doi?: string;
}

export interface Article {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime?: string;
  featured?: boolean;
  audioUrl?: string;
  episodeNumber?: number;
}

export interface Chapter extends Article {
  chapter: number;
  sections?: { title: string; id: string }[];
  references?: string[];
} 