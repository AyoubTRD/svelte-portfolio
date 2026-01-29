<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { navLinksStore } from '../../../stores/navLinksStore';
	import { page } from '$app/stores';
	import { backOut } from 'svelte/easing';

	let isHomePage = true;
	let animate = false;
	let scrolled = false;

	$: {
		if ($page.url.pathname === '/') {
			isHomePage = true;
		} else {
			isHomePage = false;
		}
	}

	onMount(() => {
		animate = true;

		// Track scroll for header state
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="header-main" class:scrolled>
	<!-- Top accent line -->
	<div class="header-accent-line"></div>

	<div class="header-container">
		{#if animate}
			<!-- Logo/Brand -->
			<a href="/" class="brand-link" in:scale={{ duration: 600, easing: backOut }}>
				<div class="brand-wrapper">
					<!-- Monogram -->
					<div class="monogram">AT</div>
					<!-- Full name (hidden on mobile) -->
					<div class="brand-name">
						<span class="brand-first">Ayoub</span>
						<span class="brand-last">Taouarda</span>
					</div>
				</div>
			</a>

			{#if isHomePage}
				<!-- Navigation -->
				<nav class="nav-main">
					{#each $navLinksStore as navLink, i}
						<a
							href={navLink.href}
							class="nav-link"
							class:active={navLink.active}
							in:fade={{ duration: 400, delay: 200 + i * 100 }}
						>
							<span class="nav-index">{String(i + 1).padStart(2, '0')}</span>
							<span class="nav-label">{navLink.label}</span>
							<div class="nav-indicator"></div>
						</a>
					{/each}
				</nav>
			{/if}
		{/if}
	</div>
</header>

<style lang="postcss">
	/* Header - Fixed architectural bar */
	.header-main {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(42, 43, 46, 0.85);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 200, 106, 0.1);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.header-main.scrolled {
		background: rgba(42, 43, 46, 0.95);
		border-bottom-color: rgba(255, 200, 106, 0.2);
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
	}

	/* Top accent line */
	.header-accent-line {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, #ffc86a 0%, #ed9500 50%, #ffc86a 100%);
		transform-origin: center;
		animation: accentPulse 8s ease-in-out infinite;
	}

	@keyframes accentPulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	/* Header container */
	.header-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1.5rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		.header-container {
			padding: 1rem 1.5rem;
		}
	}

	/* Brand/Logo */
	.brand-link {
		text-decoration: none;
		display: block;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.brand-link:hover {
		transform: scale(1.05);
	}

	.brand-wrapper {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	/* Monogram - Always visible */
	.monogram {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 2rem;
		font-weight: 400;
		color: #ffc86a;
		letter-spacing: -0.05em;
		line-height: 1;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 200, 106, 0.1);
		border: 2px solid rgba(255, 200, 106, 0.3);
		position: relative;
		transition: all 0.3s ease;
	}

	.brand-link:hover .monogram {
		background: rgba(255, 200, 106, 0.2);
		border-color: rgba(255, 200, 106, 0.6);
	}

	/* Brand name - Hidden on mobile */
	.brand-name {
		display: none;
		flex-direction: column;
		gap: 0;
		line-height: 1.1;
	}

	@media (min-width: 768px) {
		.brand-name {
			display: flex;
		}
	}

	.brand-first,
	.brand-last {
		font-family: 'Montserrat', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.brand-first {
		color: rgba(228, 228, 229, 0.5);
	}

	.brand-last {
		color: #ffc86a;
	}

	/* Navigation */
	.nav-main {
		display: none;
		align-items: center;
		gap: 0.5rem;
	}

	@media (min-width: 768px) {
		.nav-main {
			display: flex;
			gap: 2rem;
		}
	}

	/* Nav link */
	.nav-link {
		position: relative;
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		text-decoration: none;
		padding: 0.5rem 0;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	/* Nav index number */
	.nav-index {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 0.75rem;
		color: rgba(255, 200, 106, 0.4);
		font-weight: 400;
		transition: color 0.3s ease;
	}

	/* Nav label */
	.nav-label {
		font-family: 'Montserrat', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(228, 228, 229, 0.6);
		transition: color 0.3s ease;
	}

	/* Nav indicator line */
	.nav-indicator {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: #ffc86a;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	/* Hover state */
	.nav-link:hover .nav-index {
		color: rgba(255, 200, 106, 0.8);
	}

	.nav-link:hover .nav-label {
		color: rgba(228, 228, 229, 0.9);
	}

	.nav-link:hover .nav-indicator {
		transform: scaleX(1);
	}

	/* Active state */
	.nav-link.active .nav-index {
		color: #ffc86a;
	}

	.nav-link.active .nav-label {
		color: #ffffff;
	}

	.nav-link.active .nav-indicator {
		transform: scaleX(1);
		background: linear-gradient(90deg, #ffc86a 0%, #ed9500 100%);
	}
</style>
