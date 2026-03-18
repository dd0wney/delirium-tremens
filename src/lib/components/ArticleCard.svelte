<script lang="ts">
	import { base } from '$app/paths';
	import type { Article } from '$lib/types';
	import { getTopicAssets } from '$lib/utils/icons';

	let { article, featured = false }: { article: Article; featured?: boolean } = $props();

	let assets = $derived(getTopicAssets(article.category.toLowerCase()));
</script>

<article class="relative flex flex-col gap-8 {featured ? 'lg:flex-row' : ''}">
	<div
		class="relative {featured
			? 'lg:w-64 lg:shrink-0'
			: 'w-full'} aspect-[16/9] sm:aspect-[2/1] lg:aspect-square"
	>
		<div class="bg-[var(--primary)]/5 ring-[var(--primary)]/10 absolute inset-0 rounded-2xl ring-1">
			<div class="absolute inset-0 flex items-center justify-center text-4xl">
				{assets.icon}
			</div>
		</div>
	</div>

	<div class="flex flex-1 flex-col">
		<div class="flex items-center gap-x-4 text-xs">
			<time datetime={article.date} class="text-[var(--text-muted)]">
				{new Date(article.date).toLocaleDateString()}
			</time>
			<div class="flex gap-2">
				{#each article.tags?.slice(0, 2) || [] as tag}
					<span
						class="bg-[var(--primary)]/10 relative z-10 rounded-full px-3 py-1 text-[var(--primary)]"
					>
						{tag}
					</span>
				{/each}
			</div>
		</div>
		<h3 class="mt-3 text-2xl font-semibold leading-6 text-[var(--primary)]">
			<a href="{base}/blog/{article.slug}">
				<span class="absolute inset-0"></span>
				{article.title}
			</a>
		</h3>
		<p class="mt-5 line-clamp-3 text-sm leading-6 text-[var(--text)]">{article.description}</p>
		<div class="border-[var(--primary)]/10 mt-6 flex border-t pt-6">
			<div class="relative flex items-center gap-x-4">
				<div class="text-sm">
					<p class="font-semibold text-[var(--text)]">{article.readingTime}</p>
					<p class="text-[var(--text-muted)]">{article.category}</p>
				</div>
			</div>
		</div>
	</div>
</article>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>