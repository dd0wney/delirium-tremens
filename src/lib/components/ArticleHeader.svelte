<script lang="ts">
	import type { Article, Chapter } from '$lib/types';
	import { getTopicAssets } from '$lib/utils/icons';
	import PlayButton from './PlayButton.svelte';
	import { player } from '$lib/stores/player';

	let { article }: {
		article: Article;
	} = $props();

	let assets = $derived(getTopicAssets(article.category.toLowerCase()));
	let isPlaying = $derived($player.currentArticle?.slug === article.slug && $player.isPlaying);
	let chapterNum = $derived('chapter' in article ? (article as Chapter).chapter : null);
</script>

<header class="flex flex-col items-start gap-6">
	<!-- Date in monospace -->
	<div class="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)]">
		<time datetime={article.date}>
			{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
		</time>
		{#if article.readingTime}
			<span aria-hidden="true">&middot;</span>
			<span>{article.readingTime}</span>
		{/if}
	</div>

	<!-- Play button + Title row -->
	<div class="flex items-center gap-6">
		{#if article.audioUrl}
			<PlayButton
				playing={isPlaying}
				article={article}
				size="lg"
			/>
		{/if}
		<h1 class="text-4xl font-bold text-[var(--text)] sm:text-5xl">
			{#if chapterNum}<span class="text-[var(--primary)]">{chapterNum}: </span>{/if}{article.title}
		</h1>
	</div>

	<!-- Description -->
	<p class="text-lg font-medium leading-8 text-[var(--text-muted)]">
		{article.description}
	</p>
</header>
