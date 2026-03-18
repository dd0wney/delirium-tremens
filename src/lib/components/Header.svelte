<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileMenuOpen: boolean = $state(false);

	// Close mobile menu on route change
	$effect(() => {
		// Reading page.url.pathname creates the dependency
		page.url.pathname;
		mobileMenuOpen = false;
	});

	function toggleMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
	}
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
				<div class="hidden lg:block">
					<ThemeToggle />
				</div>
				<a
					href="https://github.com/yourusername/your-repo"
					class="hidden lg:block lg:text-sm lg:font-semibold lg:text-[var(--text)]"
				>
					View on GitHub
				</a>

				<!-- Mobile hamburger button -->
				<button
					type="button"
					class="lg:hidden text-[var(--text)] transition-colors duration-200 hover:text-[var(--primary)]"
					onclick={toggleMenu}
					aria-expanded={mobileMenuOpen}
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{#if mobileMenuOpen}
						<!-- Close (X) icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<!-- Hamburger (3 lines) icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</nav>

	<!-- Mobile menu overlay -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="mobile-overlay lg:hidden"
		class:mobile-overlay-visible={mobileMenuOpen}
		onclick={() => (mobileMenuOpen = false)}
		onkeydown={(e: KeyboardEvent) => { if (e.key === 'Escape') mobileMenuOpen = false; }}
	></div>

	<!-- Mobile menu drawer -->
	<div
		class="mobile-drawer lg:hidden"
		class:mobile-drawer-open={mobileMenuOpen}
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation"
	>
		<div class="flex flex-col gap-6 p-6">
			<a
				href="{base}/blog"
				class="text-lg font-semibold text-[var(--text)] transition-colors duration-200 hover:text-[var(--primary)]"
			>
				Articles
			</a>
			<a
				href="{base}/about"
				class="text-lg font-semibold text-[var(--text)] transition-colors duration-200 hover:text-[var(--primary)]"
			>
				About
			</a>
			<a
				href="https://github.com/yourusername/your-repo"
				class="text-lg font-semibold text-[var(--text)] transition-colors duration-200 hover:text-[var(--primary)]"
			>
				View on GitHub
			</a>
			<div class="border-t border-[var(--border)] pt-4">
				<div class="flex items-center gap-3">
					<span class="text-sm text-[var(--text-muted)]">Theme</span>
					<ThemeToggle />
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.mobile-overlay {
		position: fixed;
		inset: 0;
		top: 4rem; /* below header */
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		pointer-events: none;
		transition: opacity 300ms ease;
		z-index: 40;
	}

	.mobile-overlay-visible {
		opacity: 1;
		pointer-events: auto;
	}

	.mobile-drawer {
		position: fixed;
		top: 4rem; /* below header */
		right: 0;
		width: 280px;
		max-width: 80vw;
		height: calc(100vh - 4rem);
		background-color: var(--background);
		border-left: 1px solid var(--border);
		transform: translateX(100%);
		transition: transform 300ms ease;
		z-index: 50;
		overflow-y: auto;
	}

	.mobile-drawer-open {
		transform: translateX(0);
	}
</style>
