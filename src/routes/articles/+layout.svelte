<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div transition:fade>
			<slot />
		</div>
	</div>
</div> 