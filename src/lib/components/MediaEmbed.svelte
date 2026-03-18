<script lang="ts">
  import { onMount } from 'svelte';
  
  export let type: 'video' | 'audio';
  export let src: string;
  export let title: string;
  export let description: string;
  export let poster: string | undefined = undefined;
  export let preload: 'none' | 'metadata' | 'auto' = 'metadata';
  
  let mediaElement: HTMLVideoElement | HTMLAudioElement | undefined;
  let isLoading = true;
  let hasError = false;
  let progress = 0;
  
  onMount(() => {
    if (mediaElement) {
      // Show loading state while media is buffering
      mediaElement.addEventListener('waiting', () => isLoading = true);
      mediaElement.addEventListener('canplay', () => isLoading = false);
      mediaElement.addEventListener('error', () => hasError = true);
      
      // Track loading progress
      mediaElement.addEventListener('progress', () => {
        if (mediaElement.buffered.length > 0) {
          progress = (mediaElement.buffered.end(0) / mediaElement.duration) * 100;
        }
      });
    }
  });
  
  // Optional: track analytics
  function handleMediaPlay() {
    // Add analytics tracking here
    console.log(`${type} played: ${title}`);
  }
</script>

<div class="bg-[var(--primary)]/5 my-8 overflow-hidden rounded-xl p-6">
	<div class="flex items-start gap-6">
		<!-- Media player -->
		<div class="flex-1">
			{#if type === 'video'}
				<video
					class="aspect-video w-full rounded-lg"
					{src}
					{poster}
					controls
					preload="metadata"
					{title}
				>
					<track kind="captions" />
					Your browser does not support the video tag.
				</video>
			{:else}
				<audio class="w-full" {src} controls preload="metadata" {title}>
					Your browser does not support the audio element.
				</audio>
			{/if}
		</div>

		<!-- Description -->
		<div class="hidden w-80 shrink-0 lg:block">
			<h3 class="font-semibold text-[var(--primary)]">{title}</h3>
			<p class="text-[var(--text-with-opacity)] mt-2 text-sm">{description}</p>
		</div>
	</div>

	<!-- Mobile description -->
	<div class="mt-4 lg:hidden">
		<h3 class="font-semibold text-[var(--primary)]">{title}</h3>
		<p class="text-[var(--text-with-opacity)] mt-2 text-sm">{description}</p>
	</div>
</div>
