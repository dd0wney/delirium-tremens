<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { chapters } from '$lib/data/chapters';
	
	// Change from export let to export const since it's not used internally
	export const categories: string[] = [];
	export let selectedCategory: string | null = null;
	
	const dispatch = createEventDispatcher<{
		search: { query: string; category: string | null; tags: string[] };
	}>();
	
	let searchQuery = '';
	let isSearchFocused = false;
	let selectedTags: string[] = [];
	
	// Get unique tags from all chapters
	$: allTags = [...new Set(chapters.flatMap((chapter) => chapter.tags))].sort();
	
	function handleSearch() {
		dispatch('search', { 
			query: searchQuery,
			category: selectedCategory,
			tags: selectedTags
		});
	}
	
	function handleCategorySelect(category: string | null) {
		selectedCategory = category;
		handleSearch();
	}
	
	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
		handleSearch();
	}
</script>

<div class="relative">
	<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
		<!-- Decorative background elements -->
		<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--primary)] to-[var(--primary-hover)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
	</div>

	<div class="flex flex-col gap-6">
		<input
			type="text"
			placeholder="Search articles..."
			class="w-full rounded-xl border-0 bg-[var(--background)]/50 px-4 py-3 text-[var(--text)] shadow-sm ring-1 ring-inset ring-[var(--primary)]/20 focus:ring-2 focus:ring-inset focus:ring-[var(--primary)] sm:text-sm sm:leading-6"
			bind:value={searchQuery}
			on:input={handleSearch}
		/>

		<div class="flex flex-wrap gap-2">
			{#each allTags as tag}
				<button
					class="relative rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-sm font-medium text-[var(--primary)] hover:bg-[var(--primary)]/20 {selectedTags.includes(tag) ? 'ring-2 ring-[var(--primary)]' : ''}"
					on:click={() => toggleTag(tag)}
				>
					{tag}
				</button>
			{/each}
		</div>
	</div>
</div> 