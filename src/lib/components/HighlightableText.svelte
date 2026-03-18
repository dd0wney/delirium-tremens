<script lang="ts">
  import type { Snippet } from 'svelte';
  import { highlightStore, type Highlight } from '$lib/stores/highlights';
  import { onMount } from 'svelte';

  let { chapterId, disabled = false, onhighlight, children }: {
    chapterId: string;
    disabled?: boolean;
    onhighlight?: (detail: { text: string; startOffset: number; endOffset: number }) => void;
    children?: Snippet;
  } = $props();

  let container: HTMLDivElement;
  let highlights: Highlight[] = $state([]);

  function handleSelection() {
    if (disabled) return;
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const text = selection.toString().trim();

    if (!text) return;

    onhighlight?.({
      text,
      startOffset: range.startOffset,
      endOffset: range.endOffset
    });

    selection.removeAllRanges();
  }

  onMount(() => {
    const unsubscribe = highlightStore.subscribe(store => {
      highlights = store.highlights.filter(h => h.chapterId === chapterId);
    });

    return unsubscribe;
  });
</script>

<div
  bind:this={container}
  class="prose prose-invert"
>
  <div
    role="textbox"
    onmouseup={handleSelection}
    class="w-full cursor-text"
    aria-label="Content with text highlighting enabled"
    tabindex="0"
  >
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
