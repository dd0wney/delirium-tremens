<script lang="ts">
	import { base } from '$app/paths';
	import { chapters } from '$lib/data/chapters';
	import Search from '$lib/components/Search.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { fade } from 'svelte/transition';

	// Convert chapters to articles format with more detailed metadata
	const articles = chapters.map(chapter => ({
		title: chapter.title,
		description: chapter.description || `Deep dive into ${chapter.title.toLowerCase()} with practical examples and interview-focused solutions.`,
		slug: chapter.slug,
		date: chapter.date || "2024-03-20",
		readingTime: "10 min read",
		category: chapter.category || "Uncategorized",
		tags: chapter.tags || [],
		featured: chapter.chapter === 1
	}));

	const categories = [...new Set(articles.map(article => article.category))];
	let filteredArticles = $state(articles);
	let selectedCategory: string | null = $state(null);
	let searchQuery = $state('');

	function handleSearch(detail: { query: string; category: string | null; tags: string[] }) {
		searchQuery = detail.query.toLowerCase();
		const category = detail.category;
		const tags = detail.tags;

		filteredArticles = articles.filter(article => {
			const matchesSearch =
				article.title.toLowerCase().includes(searchQuery) ||
				article.description.toLowerCase().includes(searchQuery);

			const matchesCategory = !category || article.category === category;
			const matchesTags = tags.length === 0 || tags.every(tag => article.tags?.includes(tag));

			return matchesSearch && matchesCategory && matchesTags;
		});
	}

	const featuredArticles = articles.filter(a => a.featured);
	const regularArticles = articles.filter(a => !a.featured);
</script>

<div class="relative min-h-screen bg-[var(--background)]">
	<!-- Hero Section -->
	<div class="relative isolate overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
			<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
				<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
					<h1 class="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-6xl">
						Algorithm Guide
					</h1>
					<p class="relative mt-6 text-lg leading-8 text-[var(--text)]/80 sm:max-w-md lg:max-w-none">
						A comprehensive guide to algorithms, data structures, and system design through practical examples and interview problems.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<!-- Search -->
			<div class="mb-16">
				<Search {categories} {selectedCategory} onsearch={handleSearch} />
			</div>

			<!-- Featured Articles -->
			{#if featuredArticles.length > 0 && !searchQuery}
				<div class="mb-24">
					<h2 class="sr-only">Featured Articles</h2>
					<div class="space-y-16">
						{#each featuredArticles as article (article.slug)}
							<ArticleCard {article} featured />
						{/each}
					</div>
				</div>
			{/if}

			<!-- Regular Articles -->
			<div class="space-y-16 border-t border-[var(--primary)]/10 pt-16">
				{#if filteredArticles.length === 0}
					<p class="text-center text-lg text-[var(--text-muted)]">
						No articles found matching your search criteria.
					</p>
				{:else}
					{#each filteredArticles as article (article.slug)}
						<div transition:fade>
							<ArticleCard {article} />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
