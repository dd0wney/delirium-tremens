import { chapters } from '$lib/data/chapters';
import { articles } from '$lib/data/articles';
import type { RequestHandler } from './$types';

export const prerender = true;

const BASE_URL = 'https://dd0wney.github.io/delirium-tremens';

// Chapters that have actual content pages under /blog/
const PUBLISHED_CHAPTER_SLUGS = new Set([
	'introduction',
	'arrays',
	'strings',
	'linked-lists',
	'primitive-types',
	'references'
]);

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().split('T')[0];

	const staticPages = [
		{ loc: '', lastmod: today, priority: '1.0', changefreq: 'weekly' },
		{ loc: '/blog', lastmod: today, priority: '0.8', changefreq: 'weekly' },
		{ loc: '/about', lastmod: today, priority: '0.5', changefreq: 'monthly' }
	];

	const chapterPages = chapters
		.filter((ch) => PUBLISHED_CHAPTER_SLUGS.has(ch.slug))
		.map((ch) => ({
			loc: `/blog/${ch.slug}`,
			lastmod: ch.date,
			priority: '0.7',
			changefreq: 'monthly' as const
		}));

	const articlePages = articles.map((article) => ({
		loc: `/articles/${article.slug}`,
		lastmod: article.date,
		priority: '0.6',
		changefreq: 'monthly' as const
	}));

	const allPages = [...staticPages, ...chapterPages, ...articlePages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${escapeXml(`${BASE_URL}${page.loc}`)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
