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

	function isChapter(item: Article | Chapter): item is Chapter {
		return 'chapter' in item;
	}

	let chapter = $derived(isChapter(data.article) ? data.article : null);
</script>

<svelte:head>
	<title>{data.article.title} — Delirium Tremens</title>
	<meta name="description" content={data.article.description} />
	<meta property="og:title" content="{data.article.title} — Delirium Tremens" />
	<meta property="og:description" content={data.article.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="py-16 lg:py-36">
	<a
		href="{base}/blog"
		class="mb-6 inline-block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
	>
		&larr; Back to Articles
	</a>
	<ArticleHeader article={data.article} />

	{#if chapter?.sections?.length}
		<nav class="mt-8 rounded-lg border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6">
			<h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
				Chapter {chapter.chapter} — Sections
			</h2>
			<ol class="list-inside list-decimal space-y-1 text-[var(--text)]/80">
				{#each chapter.sections as section}
					<li>
						<a href="#{section.id}" class="hover:text-[var(--primary)] transition-colors">
							{section.title}
						</a>
					</li>
				{/each}
			</ol>
		</nav>
	{/if}

	<div class="prose prose-lg mt-14 max-w-[75ch]
		prose-p:text-[var(--text)]
		prose-li:text-[var(--text)]
		prose-strong:text-[var(--text)]
		prose-em:text-[var(--text)]">
		{@render children()}
	</div>

	{#if data.prevArticle || data.nextArticle}
		<nav class="mt-16 flex w-full items-start justify-between border-t border-[var(--text-muted)]/20 pt-8">
			{#if data.prevArticle}
				<a href="{base}/blog/{data.prevArticle.slug}" class="group flex flex-col gap-1">
					<span class="text-sm text-[var(--text-muted)]">&larr; Previous</span>
					<span class="text-[var(--primary)] transition-colors group-hover:brightness-125">
						{data.prevArticle.title}
					</span>
				</a>
			{:else}
				<div></div>
			{/if}

			{#if data.nextArticle}
				<a href="{base}/blog/{data.nextArticle.slug}" class="group flex flex-col items-end gap-1 text-right">
					<span class="text-sm text-[var(--text-muted)]">Next &rarr;</span>
					<span class="text-[var(--primary)] transition-colors group-hover:brightness-125">
						{data.nextArticle.title}
					</span>
				</a>
			{/if}
		</nav>
	{/if}
</article>
