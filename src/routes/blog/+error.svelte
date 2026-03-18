<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="flex min-h-screen items-center justify-center bg-[var(--background)] p-4">
	<div class="text-center">
		<h1 class="mb-4 text-4xl font-bold text-[var(--primary)]">
			{#if $page.status === 404}
				Chapter Not Found
			{:else}
				{$page.status}: {$page.error?.message || 'Something went wrong'}
			{/if}
		</h1>

		<div class="mb-8 text-[var(--text)]">
			{#if $page.status === 404}
				<p>Sorry, we couldn't find the page you're looking for.</p>
			{:else}
				<p>An unexpected error occurred. Please try again later.</p>
			{/if}
		</div>

		<div class="flex justify-center gap-4">
			<a
				href="{base}/"
				class="rounded-lg bg-[var(--primary)]/10 px-4 py-2 text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/20"
			>
				← Back to Home
			</a>
			<button
				onclick={() => history.back()}
				class="rounded-lg bg-[var(--primary)]/10 px-4 py-2 text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/20"
			>
				Go Back
			</button>
		</div>
	</div>
</div> 