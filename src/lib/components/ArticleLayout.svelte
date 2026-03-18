<script lang="ts">
	import { base } from '$app/paths';
	import type { PageMetadata } from '$lib/types';
	
	export let metadata: PageMetadata;
</script>

<article class="prose prose-lg prose-invert mx-auto max-w-3xl px-6 py-24 lg:px-8 sm:py-32">
	<header class="not-prose mb-16">
		<h1 class="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
			{metadata.title}
		</h1>
		
		<div class="mt-6 flex items-center gap-x-4 text-xs">
			{#if metadata.date}
				<time datetime={metadata.date} class="text-[var(--text-muted)]">
					{new Date(metadata.date).toLocaleDateString()}
				</time>
			{/if}
			<span class="relative z-10 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 font-medium text-[var(--primary)]">
				Chapter {metadata.chapter}
			</span>
		</div>
	</header>

	<slot />

	{#if metadata.references?.length}
		<footer class="not-prose mt-16 border-t border-[var(--primary)]/10 pt-8">
			<h2 class="text-2xl font-bold text-[var(--primary)]">References</h2>
			<ul class="mt-4 space-y-2">
				{#each metadata.references as ref}
					<li class="text-[var(--text)]">{ref}</li>
				{/each}
			</ul>
		</footer>
	{/if}
</article> 