<script lang="ts">
	let { message = 'Loading...' }: { message?: string } = $props();
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]/50 backdrop-blur-sm">
	<div class="animate-pulse text-[var(--primary)]">{message}</div>
</div>