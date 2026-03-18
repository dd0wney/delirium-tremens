<script lang="ts">
	import type { Article } from '$lib/types';
	import { getTopicAssets } from '$lib/utils/icons';

	let { article }: {
		article: Article;
	} = $props();

	let assets = $derived(getTopicAssets(article.category.toLowerCase()));
</script>

<header class="relative mb-10 xl:mb-0">
	<div class="flex flex-col">
		<div class="order-first flex items-center gap-3 text-sm text-[var(--text-muted)]">
			<time datetime={article.date}>
				{new Date(article.date).toLocaleDateString()}
			</time>
			{#if article.readingTime}
				<span aria-hidden="true">&middot;</span>
				<span>{article.readingTime}</span>
			{/if}
		</div>

		<h1 class="mt-6 text-4xl font-bold text-[var(--primary)] sm:text-5xl">
			{article.title}
		</h1>

		<p class="mt-6 text-lg text-[var(--text)]/80">
			{article.description}
		</p>

		<div class="mt-6 flex flex-wrap gap-2">
			{#each article.tags || [] as tag}
				<span class="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm text-[var(--primary)]">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</header>
