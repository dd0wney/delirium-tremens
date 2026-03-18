<script lang="ts">
	let { text, type = 'secondary' }: { text: string; type?: 'primary' | 'secondary' } = $props();
</script>

<span
	class="inline-flex items-center rounded-full px-2.5 py-1 text-[0.8125rem] font-medium transition-colors
	{type === 'primary'
		? 'bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20'
		: 'bg-[var(--primary)]/5 text-[var(--text-muted)] hover:bg-[var(--primary)]/10'}"
>
	{text}
</span>