<script lang="ts">
	import type { Article } from '$lib/types';
	import Tag from './Tag.svelte';

	let { article }: { article: Article } = $props();
</script>

<div class="flex flex-wrap items-center gap-2">
	<time datetime={article.date} class="text-xs text-[var(--text-muted)]">
		{new Date(article.date).toLocaleDateString()}
	</time>
	<span class="text-xs text-[var(--text-muted)]">•</span>
	<Tag text={article.category} type="primary" />
	{#if article.tags?.length > 0}
		<span class="text-xs text-[var(--text-muted)]">•</span>
		<div class="flex flex-wrap gap-1">
			{#each article.tags.slice(0, 2) as tag}
				<Tag text={tag} />
			{/each}
			{#if article.tags.length > 2}
				<span class="text-xs text-[var(--text-muted)]">+{article.tags.length - 2}</span>
			{/if}
		</div>
	{/if}
</div>