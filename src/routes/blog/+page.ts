import type { PageLoad } from './$types';
import { articles } from '$lib/data/articles';

export const load: PageLoad = () => {
    return {
        articles,
        featuredArticles: articles.filter(a => a.featured),
        categories: [...new Set(articles.map(article => article.category))]
    };
}; 