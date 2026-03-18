<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Chapter } from '$lib/types';
	import { getChapterUrl } from '$lib/utils/navigation';

	export let prevChapter: Chapter | null;
	export let nextChapter: Chapter | null;

	function handleKeydown(event: KeyboardEvent) {
		if (event.altKey) {
			if (event.key === 'ArrowLeft' && prevChapter) {
				event.preventDefault();
				window.scrollTo(0, 0);
				goto(getChapterUrl(prevChapter)).catch((error) => {
					console.error('Navigation failed:', error);
				});
			} else if (event.key === 'ArrowRight' && nextChapter) {
				event.preventDefault();
				window.scrollTo(0, 0);
				goto(getChapterUrl(nextChapter)).catch((error) => {
					console.error('Navigation failed:', error);
				});
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
