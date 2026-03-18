<script lang="ts">
	import { base } from '$app/paths';
	import type { Chapter } from '$lib/types';
	import KeyboardNavigation from './KeyboardNavigation.svelte';
	import { getChapterUrl } from '$lib/utils/navigation';

	let { chapters, currentSlug = '' }: { chapters: Chapter[]; currentSlug?: string } = $props();

	let currentIndex = $derived(chapters.findIndex((c) => c.slug === currentSlug));
	let prevChapter = $derived(currentIndex > 0 ? chapters[currentIndex - 1] : null);
	let nextChapter = $derived(currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null);

	function handleNavigate() {
		window.scrollTo(0, 0);
	}
</script>

<KeyboardNavigation {prevChapter} {nextChapter} />

<div
	class="mt-12 flex flex-col justify-between gap-4 border-t border-[var(--primary)] pt-6 text-[var(--text)] sm:mt-16 sm:flex-row sm:gap-0"
>
	<!-- Previous chapter -->
	<div class="text-center sm:text-left">
		{#if prevChapter}
			<a
				class="text-[var(--text)] no-underline hover:text-[var(--primary)]"
				href={getChapterUrl(prevChapter)}
				onclick={handleNavigate}
				aria-label="Previous chapter: {prevChapter.title}"
			>
				← {prevChapter.title}
			</a>
		{/if}
	</div>

	<!-- Next chapter -->
	<div class="text-center sm:text-right">
		{#if nextChapter}
			<a
				href={getChapterUrl(nextChapter)}
				class="text-[var(--text)] no-underline hover:text-[var(--primary)]"
				onclick={handleNavigate}
				aria-label="Next chapter: {nextChapter.title}"
			>
				{nextChapter.title} →
			</a>
		{/if}
	</div>
</div>
