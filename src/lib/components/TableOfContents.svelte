<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import type { Chapter } from '$lib/types';
	import { getArticleUrl, getBlogUrl, getSectionUrl } from '$lib/utils/navigation';
	import { activeSection } from '$lib/stores/activeSection';
	import { browser } from '$app/environment';
	import { chapters as chapterData } from '$lib/data/chapters';

	let { chapterList = chapterData, side = 'left', sections = [] }: {
		chapterList?: Chapter[];
		side?: 'left' | 'right';
		sections?: { title: string; id: string }[];
	} = $props();

	let currentPath = $derived($page.url.pathname);
	let currentChapter = $derived(chapterList.find((c) => c.slug === $page.params.chapter));
	let hasActiveSections = $derived(currentChapter?.sections && currentChapter.sections.length > 0);

	function handleKeydown(e: KeyboardEvent, href: string) {
		if (!browser) return;
		if (e.key === 'Enter') {
			window.scrollTo(0, 0);
			window.location.href = href;
		}
	}

	function handleSectionKeydown(e: KeyboardEvent, chapter: Chapter, sectionId: string) {
		if (!browser) return;
		if (e.key === 'Enter') {
			window.location.href = getSectionUrl(chapter, sectionId);
		}
	}
</script>

{#if side === 'right'}
	{#if hasActiveSections && currentChapter?.sections}
		<nav class="sticky top-16 hidden h-[calc(100vh-4rem)] flex-col gap-4 py-8 lg:flex">
			<div class="flex flex-col gap-2">
				<nav class="text-sm" aria-label="Table of contents">
					<h2 class="font-display text-sm font-medium text-[var(--text)]">On this page</h2>
					<ol class="mt-4 space-y-3">
						{#each sections as section}
							<li>
								<a
									href="#{section.id}"
									class="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
								>
									{section.title}
								</a>
							</li>
						{/each}
					</ol>
				</nav>
			</div>
		</nav>
	{/if}
{:else}
	<div class="text-[var(--text)]">
		{#each chapterList as chapter}
			<div class="mb-4">
				<a
					href={getArticleUrl(chapter)}
					tabindex="0"
					class="text-[var(--text)] no-underline transition-colors duration-200 hover:text-[var(--primary)] {currentPath.includes(
						chapter.slug
					)
						? 'text-[var(--primary)]'
						: ''}"
				>
					<span class="text-[var(--primary)]">{chapter.chapter}.</span>
					{chapter.title}
				</a>
				{#if chapter.sections && chapter.sections.length > 0}
					<ul class="border-[var(--primary)]/20 mt-2 space-y-2 border-l pl-4">
						{#each chapter.sections as section}
							<li>
								<a
									href={getSectionUrl(chapter, section.id)}
									tabindex="0"
									onkeydown={(e: KeyboardEvent) => {
										e.preventDefault();
										handleSectionKeydown(e, chapter, section.id);
									}}
									class="text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--primary)]
										{$activeSection === section.id ? 'text-[var(--primary)]' : ''}"
								>
									{section.title}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
{/if}
