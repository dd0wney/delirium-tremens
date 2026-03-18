<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		theme.initialize();
	});
</script>

<svelte:head>
	<title>Delirium Tremens</title>
	<meta name="description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:title" content="Delirium Tremens" />
	<meta property="og:description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen bg-[var(--background)] flex flex-col">
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
	>
		Skip to main content
	</a>

	<Header />

	<div class="relative isolate flex-1">
		<!-- Background gradient decoration -->
		<div class="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent"></div>
			<div class="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:h-96 sm:w-96">
				<div class="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--primary-hover)] opacity-20 blur-3xl"></div>
			</div>
		</div>

		<!-- Main content -->
		<main id="main-content">
			{@render children()}
		</main>
	</div>

	<footer class="border-t border-[var(--border)] py-8 px-6">
		<div class="mx-auto max-w-7xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
			<p class="text-sm text-[var(--text-muted)]">
				&copy; 2024 Darragh Downey
			</p>
			<a
				href="https://github.com/dd0wney/delirium-tremens"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
			>
				GitHub
			</a>
		</div>
	</footer>
</div>
