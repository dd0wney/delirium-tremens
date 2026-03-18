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
	class="group relative flex flex-shrink-0 items-center justify-center rounded-full
	{size === 'lg' ? 'h-[4.5rem] w-[4.5rem]' : 'h-10 w-10'}
	bg-slate-700 hover:bg-slate-900 focus:ring-3 focus:ring-slate-700 focus:ring-offset-4 focus:outline-hidden"
	aria-label={playing ? 'Pause' : 'Play'}
	onclick={handleClick}
>
	<div class="absolute -inset-3 md:hidden"></div>
	<svg
		class="{size === 'lg' ? 'h-9 w-9' : 'h-5 w-5'} fill-white group-active:fill-white/80"
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
