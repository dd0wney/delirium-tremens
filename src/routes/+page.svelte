<script lang="ts">
	import { base } from '$app/paths';
	import { chapters } from '$lib/data/chapters';
</script>

<svelte:head>
	<title>Delirium Tremens — Algorithms, System Design & Security</title>
	<meta name="description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:title" content="Delirium Tremens — Algorithms, System Design & Security" />
	<meta property="og:description" content="Deep dives into algorithms, data structures, system design, and security." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-8 lg:py-12">
	<!-- Episodes/Articles List -->
	<div class="space-y-6">
		{#each chapters as episode, index (episode.slug)}
			<article class="group">
				<!-- Date -->
				<div class="flex items-center gap-x-4 mb-2">
					<time datetime={episode.date} class="font-mono text-sm text-[var(--text-muted)]">
						{new Date(episode.date ?? '').toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})}
					</time>
					{#if episode.category}
						<span class="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
							{episode.category}
						</span>
					{/if}
				</div>

				<!-- Title as link -->
				<h2 class="text-lg font-bold text-[var(--text)]">
					<a
						href="{base}/blog/{episode.slug}"
						class="transition-colors hover:text-[var(--primary)]"
					>
						{episode.title}
					</a>
				</h2>

				<!-- Description -->
				<p class="mt-2 text-sm text-[var(--text-muted)] line-clamp-3">
					{episode.description}
				</p>

				<!-- Read article link -->
				<div class="mt-3">
					<a
						href="{base}/blog/{episode.slug}"
						class="text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
					>
						Read article &rarr;
					</a>
				</div>

				<!-- Separator (except on last item) -->
				{#if index < chapters.length - 1}
					<div class="mt-6 border-b border-[var(--border)]"></div>
				{/if}
			</article>
		{/each}
	</div>
</div>
