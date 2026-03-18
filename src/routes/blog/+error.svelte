<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="flex min-h-[60dvh] flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-7xl font-bold text-[var(--primary)]">{$page.status}</p>

		<h1 class="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
			{#if $page.status === 404}
				Article Not Found
			{:else}
				{$page.error?.message || 'Something went wrong'}
			{/if}
		</h1>

		<p class="mt-6 text-base leading-7 text-[var(--text-muted)]">
			{#if $page.status === 404}
				Sorry, this article doesn't exist or may have been moved.
			{:else}
				An unexpected error occurred. Please try again later.
			{/if}
		</p>

		<div class="mt-10 flex items-center justify-center gap-6">
			<a
				href="{base}/blog"
				class="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--primary-hover)]"
			>
				&larr; Browse Articles
			</a>
			<a
				href="{base}/"
				class="text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:text-[var(--primary)]"
			>
				Back to Home &rarr;
			</a>
		</div>
	</div>
</div>
