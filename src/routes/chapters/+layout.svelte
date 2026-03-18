<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { chapters } from '$lib/data/chapters';

	$: currentSlug = $page.params.slug;
	$: currentChapter = chapters.find(c => c.slug === currentSlug);
</script>

<div class="relative">
	<!-- Article layout -->
	<div class="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="lg:grid lg:grid-cols-12 lg:gap-8">
				<!-- Main content -->
				<div class="lg:col-span-8 xl:col-span-9">
					<div transition:fade>
						<slot />
					</div>
				</div>

				<!-- Table of contents -->
				{#if currentChapter?.sections}
					<div class="hidden lg:col-span-4 lg:block xl:col-span-3">
						<div class="sticky top-[4.5rem] -mr-6 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-6 pr-6">
							<TableOfContents sections={currentChapter.sections} side="right" />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div> 