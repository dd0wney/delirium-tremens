<script lang="ts">
	import { onMount } from 'svelte';
	import { player } from '$lib/stores/player';
	import PlayButton from './PlayButton.svelte';

	let audio = $state<HTMLAudioElement>(undefined!);
	let progressBar = $state<HTMLDivElement>(undefined!);
	let isDragging = $state(false);

	$effect(() => {
		if (audio && $player.currentArticle) {
			audio.src = $player.currentArticle.audioUrl || '';
			if ($player.isPlaying) audio.play();
			else audio.pause();
		}
	});

	function formatTime(seconds: number): string {
		if (!Number.isFinite(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	function handleTimeUpdate() {
		if (!isDragging && audio) {
			player.setTime(audio.currentTime);
			player.setDuration(audio.duration);
		}
	}

	function handleProgressClick(e: MouseEvent) {
		if (!audio || !progressBar) return;

		const rect = progressBar.getBoundingClientRect();
		const pos = (e.clientX - rect.left) / rect.width;
		audio.currentTime = pos * audio.duration;
	}

	function handleVolumeInput(e: Event) {
		const volume = parseFloat((e.currentTarget as HTMLInputElement).value);
		player.setVolume(volume);
		if (audio) audio.volume = volume;
	}

	function handleProgressKeydown(e: KeyboardEvent) {
		if (!audio) return;
		if (e.key === 'ArrowRight') audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
		if (e.key === 'ArrowLeft') audio.currentTime = Math.max(0, audio.currentTime - 5);
	}

	onMount(() => {
		if (audio) {
			audio.volume = $player.volume;
		}
	});
</script>

{#if $player.currentArticle?.audioUrl}
	<div class="fixed bottom-0 left-0 right-0 bg-[var(--background)] shadow-lg">
		<div class="mx-auto max-w-7xl px-4 py-4">
			<div class="flex items-center gap-4">
				<!-- Play/Pause Button -->
				<PlayButton playing={$player.isPlaying} onclick={() => player.toggle()} />

				<!-- Title -->
				<div class="flex-1">
					<h3 class="text-sm font-medium text-[var(--primary)]">
						{$player.currentArticle.title}
					</h3>
					<p class="text-xs text-[var(--text-muted)]">
						Episode {$player.currentArticle.episodeNumber}
					</p>
				</div>

				<!-- Time -->
				<div class="text-sm text-[var(--text-muted)]">
					{formatTime($player.currentTime)} / {formatTime($player.duration)}
				</div>

				<!-- Volume -->
				<input
					type="range"
					min="0"
					max="1"
					step="0.1"
					class="w-24"
					value={$player.volume}
					oninput={handleVolumeInput}
				/>
			</div>

			<!-- Progress Bar -->
			<div
				class="bg-[var(--primary)]/20 mt-2 h-1 cursor-pointer rounded-full"
				bind:this={progressBar}
				role="slider"
				tabindex="0"
				aria-label="Playback progress"
				aria-valuemin={0}
				aria-valuemax={Math.floor($player.duration)}
				aria-valuenow={Math.floor($player.currentTime)}
				onmousedown={() => (isDragging = true)}
				onmouseup={() => (isDragging = false)}
				onmouseleave={() => (isDragging = false)}
				onclick={handleProgressClick}
				onkeydown={handleProgressKeydown}
			>
				<div
					class="h-full rounded-full bg-[var(--primary)]"
					style="width: {($player.currentTime / $player.duration) * 100}%"
				></div>
			</div>
		</div>
	</div>
{/if}

<audio bind:this={audio} ontimeupdate={handleTimeUpdate} onended={() => player.pause()}></audio>
