<script lang="ts">
	import { base } from '$app/paths';
	import { chapters } from '$lib/data/chapters';
</script>

<svelte:head>
	<title>Articles — Delirium Tremens</title>
	<meta name="description" content="Browse all articles on algorithms, data structures, system design, and security." />
	<meta property="og:title" content="Articles — Delirium Tremens" />
	<meta property="og:description" content="Browse all articles on algorithms, data structures, system design, and security." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
	<div class="lg:px-8">
	<div class="lg:max-w-4xl">
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
		<h1 class="text-2xl leading-7 font-bold text-[var(--text)]">All Articles</h1>
	</div>
	</div>
	</div>

	<div class="divide-y divide-[var(--border)] sm:mt-4 lg:mt-8 lg:border-t lg:border-[var(--border)]">
		{#each chapters as episode (episode.slug)}
			<article class="py-10 sm:py-12">
				<div class="lg:px-8"><div class="lg:max-w-4xl"><div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
					<div class="flex flex-col items-start">
						<time datetime={episode.date} class="order-first font-mono text-sm leading-7 text-[var(--text-muted)]">
							{new Date(episode.date ?? '').toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>

						<h2 class="mt-2 text-lg font-bold text-[var(--text)]">
							<a href="{base}/blog/{episode.slug}" class="hover:text-[var(--primary)]">
								{episode.title}
							</a>
						</h2>

						<p class="mt-1 text-base leading-7 text-[var(--text-secondary)]">
							{episode.description}
						</p>

						<div class="mt-4 flex items-center gap-4">
							<a
								href="{base}/blog/{episode.slug}"
								class="flex items-center text-sm leading-6 font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] active:text-[var(--primary-hover)]"
							>
								Read article
							</a>
							<span aria-hidden="true" class="text-sm font-bold text-[var(--text-muted)]">/</span>
							<a
								href="{base}/blog/{episode.slug}"
								class="flex items-center text-sm leading-6 font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] active:text-[var(--primary-hover)]"
								aria-label="Show notes for {episode.title}"
							>
								Show notes
							</a>
						</div>
					</div>
				</div></div></div>
			</article>
		{/each}
	</div>
</div>
