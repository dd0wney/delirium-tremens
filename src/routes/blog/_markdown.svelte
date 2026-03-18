<script>
	import { onMount } from 'svelte';
	import References from '$lib/components/References.svelte';
	import { chapters } from '$lib/data/chapters';

	/** @type {{ title?: string; chapter?: number; category?: string; references?: string[]; readingTime?: string; children: import('svelte').Snippet }} */
	let { title, chapter, category, references = [], readingTime, children } = $props();

	/** @type {HTMLElement | undefined} */
	let articleEl;

	// Look up full chapter data for date and description
	const chapterData = chapters.find(c => c.chapter === chapter);
	const date = chapterData?.date;
	const description = chapterData?.description;

	onMount(() => {
		if (!articleEl) return;

		const pres = articleEl.querySelectorAll('pre');

		pres.forEach((pre) => {
			const code = pre.querySelector('code');
			if (!code) return;

			const btn = document.createElement('button');
			btn.className = 'copy-button';
			btn.textContent = 'Copy';
			btn.setAttribute('aria-label', 'Copy code to clipboard');

			btn.addEventListener('click', async () => {
				try {
					await navigator.clipboard.writeText(code.textContent ?? '');
					btn.textContent = 'Copied!';
					btn.classList.add('copied');
					setTimeout(() => {
						btn.textContent = 'Copy';
						btn.classList.remove('copied');
					}, 2000);
				} catch {
					btn.textContent = 'Error';
					setTimeout(() => {
						btn.textContent = 'Copy';
					}, 2000);
				}
			});

			pre.appendChild(btn);
		});
	});
</script>

<svelte:head>
	{#if title}
		<title>{title} — Delirium Tremens</title>
		<meta property="og:title" content="{title} — Delirium Tremens" />
		<meta property="og:type" content="article" />
	{/if}
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
</svelte:head>

<article class="py-16 lg:py-36">
	<div class="lg:px-8">
	<div class="lg:max-w-4xl">
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
		<!-- Article Header -->
		<header class="flex flex-col">
			{#if date}
				<time datetime={date} class="order-first font-mono text-sm leading-7 text-[var(--text-muted)]">
					{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
			{/if}

			<h1 class="mt-2 text-4xl font-bold text-[var(--text)]">
				{#if chapter}<span class="text-[var(--primary)]">{chapter}: </span>{/if}{title}
			</h1>

			{#if description}
				<p class="mt-3 text-lg leading-8 font-medium text-[var(--text-secondary)]">
					{description}
				</p>
			{/if}
		</header>

		<hr class="my-12 border-[var(--border)]" />

		<!-- Prose Content -->
		<div bind:this={articleEl} class="prose prose-slate max-w-none" role="main" aria-label="Main content">
			{@render children()}
			{#if references.length > 0}
				<References citationIds={references} />
			{/if}
		</div>
	</div>
	</div>
	</div>
</article>
