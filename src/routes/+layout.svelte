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
	import { Home, BookOpen, User, Menu, X, Github, Headphones, Podcast, Radio, Rss } from 'lucide-svelte';

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

<div class="min-h-screen flex bg-[var(--background)]">
	<!-- DESKTOP SIDEBAR -->
	<aside class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-[28rem] lg:overflow-y-auto lg:border-r lg:border-[var(--border)] lg:flex lg:flex-col">
		<div class="flex h-full flex-col p-10">
			<div class="mb-12">
				<div class="mb-6 flex justify-center">
					<div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)]">
						<span class="text-2xl font-bold text-[var(--background)]">DT</span>
					</div>
				</div>
				<h1 class="text-center text-2xl font-bold text-[var(--text)]">Delirium Tremens</h1>
				<p class="mt-2 text-center text-sm text-[var(--text-muted)]">
					Deep dives into algorithms, system design, and security.
				</p>
				<p class="mt-1 text-center text-xs text-[var(--text-muted)]">
					Hosted by Darragh Downey
				</p>
				<p class="mt-6 text-center text-sm leading-relaxed text-[var(--text-muted)]">
					Explore solutions to programming interview questions, algorithms, data structures,
					and system design with detailed walkthroughs.
				</p>
			</div>

			<nav class="mb-12 space-y-3">
				<a href="{base}/" class="flex items-center gap-3 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<Home size={16} /> Home
				</a>
				<a href="{base}/blog" class="flex items-center gap-3 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<BookOpen size={16} /> Articles
				</a>
				<a href="{base}/about" class="flex items-center gap-3 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
					<User size={16} /> About
				</a>
			</nav>

			<div class="mb-12">
				<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Listen on</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Headphones size={14} /> Spotify</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Podcast size={14} /> Apple Podcasts</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Radio size={14} /> Overcast</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Rss size={14} /> RSS Feed</div>
				</div>
			</div>

			<div class="flex-1"></div>

			<div class="border-t border-[var(--border)] pt-6">
				<ThemeToggle />
			</div>
		</div>
	</aside>

	<!-- MOBILE TOP BAR -->
	<div class="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/80 px-6 backdrop-blur lg:hidden">
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
			<div>
				<div class="mb-4 flex justify-center">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)]">
						<span class="text-lg font-bold text-[var(--background)]">DT</span>
					</div>
				</div>
				<h2 class="text-center text-xl font-bold text-[var(--text)]">Delirium Tremens</h2>
				<p class="mt-2 text-center text-xs text-[var(--text-muted)]">
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
				<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Listen on</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Headphones size={14} /> Spotify</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Podcast size={14} /> Apple Podcasts</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Radio size={14} /> Overcast</div>
					<div class="flex items-center gap-3 text-sm text-[var(--text-muted)]"><Rss size={14} /> RSS Feed</div>
				</div>
			</div>

			<div class="border-t border-[var(--border)] pt-6">
				<ThemeToggle />
			</div>
		</div>
	</div>

	<!-- MAIN CONTENT -->
	<main id="main-content" class="flex-1 pt-16 lg:ml-[28rem] lg:pt-0">
		{@render children()}
		<PodcastPlayer />

		<footer class="mt-12 border-t border-[var(--border)] px-6 py-8 lg:mt-24" class:pb-24={hasAudio}>
			<div class="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<p class="text-sm text-[var(--text-muted)]">&copy; 2024 Darragh Downey</p>
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
	</main>
</div>
