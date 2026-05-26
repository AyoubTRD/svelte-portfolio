<script lang="ts">
	import { onMount } from 'svelte';

	import Button from '../../shared/Button/Button.svelte';
	import VerticalSocialLinks from './VerticalSocialLinks.svelte';
	import HeaderPlaceholder from '../../shared/Header/HeaderPlaceholder.svelte';
	import { fade } from 'svelte/transition';

	let animate = false;
	let currentTime = new Date();

	// Update time every second
	onMount(() => {
		animate = true;
		const interval = setInterval(() => {
			currentTime = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	// Format time
	$: hours = String(currentTime.getHours()).padStart(2, '0');
	$: minutes = String(currentTime.getMinutes()).padStart(2, '0');
	$: seconds = String(currentTime.getSeconds()).padStart(2, '0');

	// Get location
	const location = 'Marrakech, Morocco';
	const availability = 'Available for Projects';
</script>

<section id="hero" class="hero-section bg-[#2A2B2E] shadow-2xl relative overflow-hidden">
	<HeaderPlaceholder />

	{#if animate}
		<!-- Split screen layout -->
		<div class="hero-grid">
			<!-- LEFT PANEL: Typographic Manifesto -->
			<div class="left-panel">
				<!-- Oversized name typography -->
				<div class="name-block">
					<div class="name-wrapper">
						<h1 class="name-first">Ayoub</h1>
						<h1 class="name-last">Taouarda</h1>
					</div>

					<!-- Geometric accent bar -->
					<div class="accent-bar" />
				</div>

				<!-- Role and specialty -->
				<div class="role-block">
					<span class="role-label">Full-Stack Developer</span>
					<p class="specialty-desc">
						Building modern web applications with <span class="highlight">React</span>,
						<span class="highlight">Angular</span> & <span class="highlight">AI</span>
					</p>
				</div>

				<!-- CTA Button -->
				<div class="cta-block">
					<a href="/#contact" class="primary-cta">
						<span class="cta-label">Start a Project</span>
						<div class="cta-arrow">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M5 12H19M19 12L12 5M19 12L12 19"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="square"
								/>
							</svg>
						</div>
					</a>
					<a href="/#portfolio" class="secondary-cta">
						<span>View Work</span>
					</a>
				</div>
			</div>

			<!-- RIGHT PANEL: Info Grid -->
			<div class="right-panel">
				<!-- Info cards grid -->
				<div class="info-grid">
					<!-- Time card -->
					<div class="info-card time-card">
						<span class="card-label">Local Time</span>
						<div class="card-value time-display">
							<span class="time-hours">{hours}</span>
							<span class="time-separator">:</span>
							<span class="time-minutes">{minutes}</span>
							<span class="time-seconds">:{seconds}</span>
						</div>
					</div>

					<!-- Location card -->
					<div class="info-card location-card">
						<span class="card-label">Based In</span>
						<div class="card-value">{location}</div>
					</div>

					<!-- Status card -->
					<div class="info-card status-card">
						<span class="card-label">Status</span>
						<div class="card-value status-value">
							<span class="status-indicator" />
							{availability}
						</div>
					</div>

					<!-- Experience card -->
					<div class="info-card experience-card">
						<span class="card-label">Experience</span>
						<div class="card-value experience-value">
							<span class="experience-number">4+</span>
							<span class="experience-unit">Years</span>
						</div>
					</div>
				</div>

				<!-- Social links -->
				<div class="social-block">
					<VerticalSocialLinks />
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="scroll-section">
			<a href="#about" class="scroll-link">
				<span class="scroll-text">Scroll to explore</span>
				<div class="scroll-icon">
					<svg width="20" height="30" viewBox="0 0 20 30">
						<rect
							x="1"
							y="1"
							width="18"
							height="28"
							rx="9"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
						/>
						<circle class="scroll-dot" cx="10" cy="8" r="2" fill="currentColor" />
					</svg>
				</div>
			</a>
		</div>
	{/if}
</section>

<style lang="postcss">
	/* Hero section - full viewport */
	.hero-section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	/* Split screen grid layout */
	.hero-grid {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
		z-index: 10;
	}

	@media (min-width: 1024px) {
		.hero-grid {
			grid-template-columns: 1.2fr 0.8fr;
		}
	}

	/* LEFT PANEL - Typographic Manifesto */
	.left-panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 3rem 2rem;
		gap: 3rem;
		position: relative;
		background: linear-gradient(135deg, rgba(42, 43, 46, 1) 0%, rgba(42, 43, 46, 0.95) 100%);
	}

	@media (min-width: 1024px) {
		.left-panel {
			padding: 4rem 5rem;
			gap: 4rem;
		}
	}

	/* Name block - oversized typography */
	.name-block {
		opacity: 0;
		animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.2s;
	}

	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-60px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.name-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.name-first,
	.name-last {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(3rem, 10vw, 7rem);
		line-height: 0.9;
		letter-spacing: -0.04em;
		font-weight: 400;
		color: #ffffff;
		margin: 0;
		text-transform: uppercase;
	}

	.name-first {
		color: rgba(255, 255, 255, 0.3);
		font-weight: 300;
	}

	.name-last {
		color: #ffc86a;
		position: relative;
		z-index: 2;
		text-shadow: 0 4px 20px rgba(255, 200, 106, 0.3);
	}

	/* Geometric accent bar */
	.accent-bar {
		width: 120px;
		height: 4px;
		background: linear-gradient(90deg, #ffc86a 0%, transparent 100%);
		margin-top: 1.5rem;
		animation: expandWidth 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.6s;
		transform-origin: left;
		transform: scaleX(0);
	}

	@keyframes expandWidth {
		to {
			transform: scaleX(1);
		}
	}

	/* Role block */
	.role-block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		opacity: 0;
		animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 0.8s;
	}

	.role-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		color: rgba(255, 200, 106, 0.7);
		font-weight: 600;
	}

	.specialty-desc {
		font-size: clamp(1.125rem, 2vw, 1.5rem);
		line-height: 1.6;
		color: rgba(228, 228, 229, 0.85);
		max-width: 500px;
		margin: 0;
	}

	.highlight {
		color: #ffc86a;
		font-weight: 600;
		position: relative;
	}

	/* CTA block */
	.cta-block {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		opacity: 0;
		animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: 1.2s;
	}

	.primary-cta {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		background: #ffc86a;
		color: #2a2b2e;
		text-decoration: none;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 0.05em;
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
		overflow: hidden;
	}

	.primary-cta::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.6s;
	}

	.primary-cta:hover::before {
		left: 100%;
	}

	.primary-cta:hover {
		background: #ffd080;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(255, 200, 106, 0.4);
	}

	.cta-arrow {
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.primary-cta:hover .cta-arrow {
		transform: translateX(4px);
	}

	.secondary-cta {
		display: inline-flex;
		align-items: center;
		padding: 1rem 2rem;
		border: 2px solid rgba(255, 200, 106, 0.3);
		color: #ffc86a;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease;
	}

	.secondary-cta:hover {
		border-color: #ffc86a;
		background: rgba(255, 200, 106, 0.1);
	}

	/* RIGHT PANEL - Info Grid */
	.right-panel {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 3rem 2rem;
		background: rgba(49, 51, 59, 0.5);
		border-left: 1px solid rgba(255, 200, 106, 0.1);
		position: relative;
	}

	@media (min-width: 1024px) {
		.right-panel {
			padding: 4rem 3rem;
		}
	}

	/* Info grid - card layout */
	.info-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		opacity: 0;
		animation: fadeIn 1s ease-out forwards;
		animation-delay: 0.6s;
	}

	@media (min-width: 640px) {
		.info-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	/* Info card */
	.info-card {
		background: rgba(42, 43, 46, 0.6);
		border: 1px solid rgba(255, 200, 106, 0.15);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.info-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: #ffc86a;
		transform: scaleX(0);
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.info-card:hover::before {
		transform: scaleX(1);
	}

	.info-card:hover {
		border-color: rgba(255, 200, 106, 0.4);
		transform: translateY(-4px);
	}

	.card-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(228, 228, 229, 0.5);
		font-weight: 600;
	}

	.card-value {
		font-size: 1.25rem;
		font-weight: 600;
		color: #ffffff;
		font-family: 'Montserrat', sans-serif;
	}

	/* Time display */
	.time-display {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 2rem;
		color: #ffc86a;
		letter-spacing: 0.05em;
		display: flex;
		align-items: baseline;
	}

	.time-seconds {
		font-size: 1.25rem;
		color: rgba(255, 200, 106, 0.6);
	}

	.time-separator {
		animation: none;
	}

	/* Status value */
	.status-value {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.status-indicator {
		width: 10px;
		height: 10px;
		background: #00ff88;
		border-radius: 50%;
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	/* Experience value */
	.experience-value {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.experience-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 2.5rem;
		color: #ffc86a;
		line-height: 1;
	}

	.experience-unit {
		font-size: 1rem;
		color: rgba(228, 228, 229, 0.7);
	}

	/* Social block */
	.social-block {
		opacity: 0;
		animation: fadeIn 1s ease-out forwards;
		animation-delay: 1s;
	}

	/* Scroll section */
	.scroll-section {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;
		opacity: 0;
		animation: fadeIn 1s ease-out forwards;
		animation-delay: 2s;
	}

	.scroll-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: rgba(255, 200, 106, 0.7);
		transition: color 0.3s ease;
	}

	.scroll-link:hover {
		color: #ffc86a;
	}

	.scroll-text {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.scroll-icon {
		animation: scrollBounce 2s ease-in-out infinite;
	}

	@keyframes scrollBounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}

	.scroll-dot {
		animation: scrollDot 2s ease-in-out infinite;
	}

	@keyframes scrollDot {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}

	@keyframes fadeSlideUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mobile adjustments */
	@media (max-width: 1023px) {
		.hero-grid {
			min-height: auto;
		}

		.left-panel {
			min-height: 60vh;
		}

		.right-panel {
			border-left: none;
			border-top: 1px solid rgba(255, 200, 106, 0.1);
		}

		.scroll-section {
			position: relative;
			bottom: auto;
			left: auto;
			transform: none;
			margin: 2rem 0;
		}
	}
</style>
