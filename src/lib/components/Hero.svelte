<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-2xl text-center">
		<h1 class="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-6xl">
			{title}
		</h1>
		<p class="mt-6 text-lg leading-8 text-[var(--text)]">
			{description}
		</p>
	</div>
</div>