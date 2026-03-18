<script lang="ts">
	import { player } from '$lib/stores/player';
	import type { Article } from '$lib/types';

	let { playing = false, size = 'lg', article = undefined, onclick }: {
		playing?: boolean;
		size?: 'sm' | 'lg';
		article?: Article;
		onclick?: () => void;
	} = $props();

	function handleClick() {
		if (onclick) {
			onclick();
		} else if (article) {
			player.play(article);
		} else {
			player.toggle();
		}
	}
</script>

<button
	type="button"
	class="group relative flex flex-shrink-0 items-center justify-center
	{size === 'lg' ? 'h-18 w-18' : 'h-10 w-10'}
	rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
	aria-label={playing ? 'Pause' : 'Play'}
	onclick={handleClick}
>
	<div class="absolute -inset-3 md:hidden"></div>
	<svg
		class="h-5 w-5 fill-white group-active:fill-white/80"
		viewBox="0 0 36 36"
		aria-hidden="true"
	>
		{#if playing}
			<path d="M12 12h4v12h-4z M20 12h4v12h-4z" />
		{:else}
			<path d="M13.5 12.5v11l9-5.5z" />
		{/if}
	</svg>
</button>
