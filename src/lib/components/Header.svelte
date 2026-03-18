<script lang="ts">
	import { base } from '$app/paths';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="fixed inset-x-0 top-0 z-50 backdrop-blur">
	<nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center gap-8">
				<a href="{base}/" class="flex">
					<span class="text-xl font-bold text-[var(--primary)]">Delirium Tremens</span>
				</a>
				<div class="hidden lg:flex lg:gap-10">
					<a href="{base}/blog" class="text-sm font-semibold text-[var(--text)]">Articles</a>
					<a href="{base}/about" class="text-sm font-semibold text-[var(--text)]">About</a>
				</div>
			</div>
			<div class="flex items-center gap-6">
				<ThemeToggle />
				<a
					href="https://github.com/yourusername/your-repo"
					class="hidden lg:block lg:text-sm lg:font-semibold lg:text-[var(--text)]"
				>
					View on GitHub
				</a>
			</div>
		</div>
	</nav>
</header>
