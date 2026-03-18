<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div transition:fade>
			{@render children()}
		</div>
	</div>
</div>
