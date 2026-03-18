<script lang="ts">
	import type { Article, Chapter } from '$lib/types';
	import PlayButton from './PlayButton.svelte';
	import { player } from '$lib/stores/player';

	let { article }: {
		article: Article;
	} = $props();

	let isPlaying = $derived($player.currentArticle?.slug === article.slug && $player.isPlaying);
	let chapterNum = $derived('chapter' in article ? (article as Chapter).chapter : null);
</script>

<header class="flex flex-col">
	<!-- Date in monospace (order-first) -->
	<time datetime={article.date} class="order-first font-mono text-sm leading-7 text-[var(--text-muted)]">
		{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
	</time>

	<!-- Play button + Title row -->
	<div class="flex items-center gap-6">
		{#if article.audioUrl}
			<PlayButton
				playing={isPlaying}
				article={article}
				size="lg"
			/>
		{/if}
		<h1 class="mt-2 text-4xl font-bold text-[var(--text)]">
			{#if chapterNum}<span class="text-[var(--primary)]">{chapterNum}: </span>{/if}{article.title}
		</h1>
	</div>

	<!-- Description -->
	<p class="mt-3 text-lg leading-8 font-medium text-[var(--text-secondary)]">
		{article.description}
	</p>

	<!-- Divider -->
	<hr class="my-12 border-[var(--border)]" />
</header>
