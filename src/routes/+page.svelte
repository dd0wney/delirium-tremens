<script lang="ts">
	import { base } from '$app/paths';
	import { chapters } from '$lib/data/chapters';

	// Show the most recent chapters on the homepage
	const recentArticles = chapters.slice(0, 5);
</script>

<svelte:head>
	<title>Delirium Tremens — Algorithms, System Design & Security</title>
	<meta name="description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:title" content="Delirium Tremens — Algorithms, System Design & Security" />
	<meta property="og:description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-6xl">
					Delirium Tremens
				</h1>
				<p class="mt-6 text-lg leading-8 text-[var(--text)]">
					Deep dives into algorithms, system design, and security.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="{base}/blog"
						class="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-hover)]"
					>
						Browse Articles
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Recent Articles -->
	<div class="mx-auto max-w-2xl px-6">
		<h2 class="text-2xl font-bold text-[var(--primary)]">Recent Articles</h2>
		<div class="mt-8 space-y-8">
			{#each recentArticles as article}
				<article class="group relative">
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime={article.date} class="text-[var(--text-muted)]">
							{new Date(article.date ?? '').toLocaleDateString()}
						</time>
						{#if article.category}
							<span class="text-[var(--text-muted)]">{article.category}</span>
						{/if}
					</div>
					<h3 class="mt-2 text-lg font-semibold text-[var(--primary)]">
						<a href="{base}/blog/{article.slug}">{article.title}</a>
					</h3>
					<p class="mt-2 text-sm text-[var(--text-with-opacity)]">
						{article.description}
					</p>
					<div class="mt-4">
						<a
							href="{base}/blog/{article.slug}"
							class="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
						>
							Read More
						</a>
					</div>
				</article>
			{/each}
		</div>
		<div class="mt-12 text-center">
			<a
				href="{base}/blog"
				class="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
			>
				View all articles &rarr;
			</a>
		</div>
	</div>

	<!-- About Section -->
	<div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-2xl font-bold text-[var(--primary)]">About</h2>
			<div class="text-[var(--text)]/80 mt-6">
				<p>
					Delirium Tremens explores solutions to programming interview questions, algorithms,
					data structures, system design, and security. Practical examples and detailed
					walkthroughs for developers preparing for technical interviews or deepening their
					understanding of computer science fundamentals.
				</p>
			</div>
		</div>
	</div>
</div>
