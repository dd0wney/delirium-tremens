<script>
	import { onMount } from 'svelte';
	import References from '$lib/components/References.svelte';

	/** @type {{ references?: string[]; readingTime?: string; children: import('svelte').Snippet }} */
	let { references = [], readingTime, children } = $props();

	/** @type {HTMLElement | undefined} */
	let articleEl;

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

<article bind:this={articleEl} class="prose w-full focus:outline-none" role="main" aria-label="Main content">
	{#if readingTime}
		<div class="mx-auto mb-4 w-full max-w-prose">
			<span class="text-sm text-[var(--text-muted)]">{readingTime}</span>
		</div>
	{/if}
	<div
		class="mx-auto w-full max-w-prose
		prose-headings:scroll-mt-24 prose-headings:text-[var(--prose-headings)]
		prose-p:text-[var(--text)] prose-li:text-[var(--text)]
		prose-ul:marker:text-[var(--prose-bullets)]
		prose-ol:marker:text-[var(--prose-bullets)]"
	>
		{@render children()}
		{#if references.length > 0}
			<References citationIds={references} />
		{/if}
	</div>
</article>
