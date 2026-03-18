<script lang="ts">
	import { base } from '$app/paths';
	import { articles } from '$lib/data/articles';
	import PlayButton from '$lib/components/PlayButton.svelte';
	import { player } from '$lib/stores/player';
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-6xl">
					Delirium Tremens
				</h1>
				<p class="mt-6 text-lg leading-8 text-[var(--text)]">
					Ramblings and ravings of a sleep deprived narcoleptic.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="{base}/blog"
						class="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-hover)]"
					>
						Listen Now
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Episodes List -->
	<div class="mx-auto max-w-2xl px-6">
		<h2 class="text-2xl font-bold text-[var(--primary)]">Episodes</h2>
		<div class="mt-8 space-y-8">
			{#each articles as article}
				<article class="group relative">
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime={article.date} class="text-[var(--text-muted)]">
							{new Date(article.date).toLocaleDateString()}
						</time>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-[var(--primary)]">
						<a href="{base}/blog/{article.slug}">{article.title}</a>
					</h3>
					<p class="mt-2 text-sm text-[var(--text-with-opacity)]">
						{article.description}
					</p>
					<div class="mt-4 flex gap-4">
						<a
							href="{base}/blog/{article.slug}"
							class="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
						>
							Listen
						</a>
						<a
							href="{base}/blog/{article.slug}#notes"
							class="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
						>
							Show notes
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>

	<!-- About Section -->
	<div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-2xl font-bold text-[var(--primary)]">About</h2>
			<div class="text-[var(--text)]/80 mt-6">
				<p>
					In this show, Eric and Wes dig deep to get to the facts with guests who have been labeled
					villains by a society quick to judge, without actually getting the full story. Tune in
					every week for a new perspective on stories you thought you knew.
				</p>
			</div>
		</div>
	</div>

	<!-- Listen Section -->
	<div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-2xl font-bold text-[var(--primary)]">Listen</h2>
			<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
				<span class="text-[var(--text-muted)]">Spotify</span>
				<span class="text-[var(--text-muted)]">Apple Podcast</span>
				<span class="text-[var(--text-muted)]">Overcast</span>
				<span class="text-[var(--text-muted)]">RSS Feed</span>
			</div>
		</div>
	</div>
</div>
