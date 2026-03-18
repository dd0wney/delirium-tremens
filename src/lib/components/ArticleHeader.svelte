<script lang="ts">
	import type { Article } from '$lib/types';
	import { getTopicAssets } from '$lib/utils/icons';
	import PlayButton from './PlayButton.svelte';

	let { article, playing = false }: {
		article: Article;
		playing?: boolean;
	} = $props();

	let assets = $derived(getTopicAssets(article.category.toLowerCase()));
</script>

<header class="relative mb-10 xl:mb-0">
	<div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center sm:left-0 xl:left-auto xl:right-[calc(100%+1.5rem)] xl:h-auto">
		<PlayButton {playing} size="lg" />
	</div>

	<div class="flex flex-col">
		<time datetime={article.date} class="order-first text-sm text-[var(--text-muted)]">
			{new Date(article.date).toLocaleDateString()}
		</time>

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
