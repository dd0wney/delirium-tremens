<script>
	import References from '$lib/components/References.svelte';

	/** @type {{ references?: string[]; readingTime?: string; children: import('svelte').Snippet }} */
	let { references = [], readingTime, children } = $props();
</script>

<article class="prose prose-invert w-full focus:outline-none" role="main" aria-label="Main content">
	{#if readingTime}
		<div class="mx-auto mb-4 w-full max-w-prose">
			<span class="text-sm text-[var(--text-muted)]">{readingTime}</span>
		</div>
	{/if}
	<div
		class="mx-auto w-full max-w-prose
		prose-headings:scroll-mt-24 prose-headings:text-[var(--prose-headings)]
		prose-p:text-[var(--text)] prose-li:text-[var(--text)]
		prose-ul:marker:text-[var(--prose-bullets)]
		prose-ol:marker:text-[var(--prose-bullets)]"
	>
		{@render children()}
		{#if references.length > 0}
			<References citationIds={references} />
		{/if}
	</div>
</article>
