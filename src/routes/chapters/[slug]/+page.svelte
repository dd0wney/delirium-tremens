<script lang="ts">
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import type { Article } from '$lib/types';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: { article: Article }; children: Snippet } = $props();
</script>

<article class="py-16 lg:py-36">
	<ArticleHeader article={data.article} />

	<div class="prose prose-lg prose-invert mt-14 max-w-[75ch]">
		{@render children()}
	</div>
</article>
