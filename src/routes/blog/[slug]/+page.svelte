<script lang="ts">
	import { base } from '$app/paths';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import type { Article, Chapter } from '$lib/types';
	import type { Snippet } from 'svelte';

	let {
		data,
		children
	}: {
		data: { article: Article | Chapter; prevArticle: Chapter | null; nextArticle: Chapter | null };
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{data.article.title} — Delirium Tremens</title>
	<meta name="description" content={data.article.description} />
	<meta property="og:title" content="{data.article.title} — Delirium Tremens" />
	<meta property="og:description" content={data.article.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-36">
	<ArticleHeader article={data.article} />

	<div class="prose prose-lg mt-14 max-w-none
		prose-p:text-[var(--text)]
		prose-li:text-[var(--text)]
		prose-strong:text-[var(--text)]
		prose-em:text-[var(--text)]
		prose-headings:text-[var(--text)]">
		{@render children()}
	</div>

	{#if data.prevArticle || data.nextArticle}
		<nav class="mt-16 flex w-full items-start justify-between border-t border-[var(--border)] pt-8">
			{#if data.prevArticle}
				<a href="{base}/blog/{data.prevArticle.slug}" class="group flex flex-col gap-1">
					<span class="text-sm text-[var(--text-muted)]">&larr; Previous</span>
					<span class="font-medium text-[var(--primary)] transition-colors group-hover:brightness-125">
						{data.prevArticle.title}
					</span>
				</a>
			{:else}
				<div></div>
			{/if}

			{#if data.nextArticle}
				<a href="{base}/blog/{data.nextArticle.slug}" class="group flex flex-col items-end gap-1 text-right">
					<span class="text-sm text-[var(--text-muted)]">Next &rarr;</span>
					<span class="font-medium text-[var(--primary)] transition-colors group-hover:brightness-125">
						{data.nextArticle.title}
					</span>
				</a>
			{/if}
		</nav>
	{/if}
</article>
