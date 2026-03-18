<script lang="ts">
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let error: Error | null = $state(null);

	function handleError(e: ErrorEvent) {
		error = e.error;
	}
</script>

<svelte:window onerror={handleError} />

{#if error}
	<div class="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 text-center">
		<div>
			<h1 class="mb-4 text-2xl font-bold text-[var(--primary)]">Something went wrong</h1>
			<p class="mb-6 text-[var(--text)]">{error.message}</p>
			<a
				href="{base}/blog/"
				class="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-200"
			>
				← Back to home
			</a>
		</div>
	</div>
{:else}
	{@render children()}
{/if} 