<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import PodcastPlayer from '$lib/components/PodcastPlayer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { player } from '$lib/stores/player';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import Home from 'lucide-svelte/icons/home';
	import BookOpen from 'lucide-svelte/icons/book-open';
	import User from 'lucide-svelte/icons/user';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import Github from 'lucide-svelte/icons/github';

	let { children }: { children: Snippet } = $props();
	let hasAudio = $derived(!!$player.currentArticle?.audioUrl);
	let mobileMenuOpen: boolean = $state(false);

	onMount(() => {
		theme.initialize();
	});

	$effect(() => {
		page.url.pathname;
		mobileMenuOpen = false;
	});

	function toggleMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<svelte:head>
	<title>Delirium Tremens</title>
	<meta name="description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:title" content="Delirium Tremens" />
	<meta property="og:description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:type" content="website" />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
>
	Skip to main content
</a>

<div class="min-h-screen flex bg-[var(--background)] text-[var(--text)]">
	<!-- DESKTOP SIDEBAR -->
	<header class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[28rem] lg:overflow-y-auto lg:border-x lg:border-[var(--border)] lg:bg-[var(--sidebar-bg)]">
		<div class="relative z-10 mx-auto px-8 py-12 w-full flex flex-col min-h-full">
			<!-- Poster placeholder -->
			<a href="{base}/" class="relative block w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 shadow-lg mb-10" aria-label="Homepage">
				<div class="aspect-square flex items-center justify-center">
					<div class="text-6xl font-bold text-slate-700">DT</div>
				</div>
				<div class="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset"></div>
			</a>

			<!-- Title & Description -->
			<div class="text-center lg:text-left mb-12">
				<h1 class="text-xl font-bold text-[var(--text)]">
					<a href="{base}/">Delirium Tremens</a>
				</h1>
				<p class="mt-3 text-base leading-8 font-medium text-[var(--text-secondary)]">
					Deep dives into algorithms, data structures, system design, and security.
				</p>
			</div>

			<!-- Flex spacer -->
			<div class="flex-1"></div>

			<!-- Footer -->
			<div class="border-t border-[var(--border)] pt-6">
				<ThemeToggle />
			</div>
		</div>
	</header>

	<!-- MOBILE TOP BAR -->
	<div class="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6 lg:hidden">
		<h1 class="text-lg font-bold text-[var(--text)]">Delirium Tremens</h1>
		<button
			type="button"
			class="text-[var(--text)] transition-colors hover:text-[var(--primary)]"
			onclick={toggleMenu}
			aria-expanded={mobileMenuOpen}
			aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
		>
			{#if mobileMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile drawer overlay -->
	<button
		type="button"
		class="fixed inset-0 top-16 z-30 bg-black/50 transition-opacity duration-200 lg:hidden"
		class:opacity-0={!mobileMenuOpen}
		class:pointer-events-none={!mobileMenuOpen}
		onclick={() => (mobileMenuOpen = false)}
		aria-label="Close menu"
	></button>

	<!-- Mobile drawer -->
	<div
		class="fixed inset-y-16 left-0 z-30 w-80 max-w-[80vw] overflow-y-auto border-r border-[var(--border)] bg-[var(--background)] transition-transform duration-200 lg:hidden"
		class:-translate-x-full={!mobileMenuOpen}
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation"
	>
		<div class="space-y-8 p-6">
			<div class="text-center">
				<div class="mx-auto mb-4 w-20 h-20 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
					<span class="text-3xl font-bold text-slate-700">DT</span>
				</div>
				<h2 class="text-xl font-bold text-[var(--text)]">Delirium Tremens</h2>
				<p class="mt-2 text-sm text-[var(--text-secondary)]">
					Deep dives into algorithms, system design, and security.
				</p>
			</div>

			<nav class="space-y-3">
				<a href="{base}/" class="flex items-center gap-3 text-base font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<Home size={18} /> Home
				</a>
				<a href="{base}/blog" class="flex items-center gap-3 text-base font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<BookOpen size={18} /> Articles
				</a>
				<a href="{base}/about" class="flex items-center gap-3 text-base font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<User size={18} /> About
				</a>
			</nav>

			<div class="border-t border-[var(--border)] pt-6">
				<ThemeToggle />
			</div>
		</div>
	</div>

	<!-- MAIN CONTENT -->
	<main id="main-content" class="flex-1 pt-16 lg:ml-[28rem] lg:pt-0">
		<div class="border-t border-[var(--border)] lg:border-t-0 lg:relative lg:mb-28">
			{@render children()}
		</div>

		<footer class="border-t border-[var(--border)] px-6 py-8 lg:mt-24" class:pb-24={hasAudio}>
			<div class="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<p class="text-sm text-[var(--text-muted)]">&copy; 2025 Darragh Downey</p>
				<a
					href="https://github.com/dd0wney/delirium-tremens"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
				>
					<Github size={14} /> GitHub
				</a>
			</div>
		</footer>

		<PodcastPlayer />
	</main>
</div>
