<script lang="ts">
	import Typography from '../../shared/Typography/Typography.svelte';
	import { reveal } from '../../../transitions/reveal';
</script>

<div class="editorial-about">
	<!-- Oversized section number -->
	<div class="section-number-wrapper">
		<span class="section-number" in:reveal={{ duration: 800, y: 24, start: 0.96 }}>01</span>
	</div>

	<!-- Editorial grid layout -->
	<div class="content-grid">
		<!-- Title with slash accent -->
		<div class="title-block">
			<div class="title-wrapper" in:reveal={{ duration: 700, delay: 200, x: -24 }}>
				<span class="title-slash">/</span>
				<Typography type="title">
					<h2 class="editorial-title">About</h2>
				</Typography>
			</div>
			<div class="title-accent-line" in:reveal={{ duration: 900, delay: 350, x: -32 }} />
		</div>

		<!-- Main content with architectural spacing -->
		<div class="content-main" in:reveal={{ duration: 700, delay: 450, y: 20 }}>
			<div class="years-badge">
				<span class="years-number">4+</span>
				<span class="years-label">Years<br />Experience</span>
			</div>

			<div class="content-text">
				<p class="lead-text">
					Passionate full-stack developer specializing in modern web applications with React,
					Angular, and Node.js.
				</p>
				<p class="body-text">
					I aim to reach my full potential by continuously learning and tackling new challenges
					while adding value and contributing to project success. My approach combines technical
					expertise with creative problem-solving to deliver exceptional user experiences.
				</p>
			</div>
		</div>

		<!-- Stats panel -->
		<div class="stats-panel" in:reveal={{ duration: 700, delay: 600, y: 20 }}>
			<div class="stat-item">
				<span class="stat-value">React</span>
				<span class="stat-label">Primary</span>
			</div>
			<div class="stat-divider" />
			<div class="stat-item">
				<span class="stat-value">Angular</span>
				<span class="stat-label">Framework</span>
			</div>
			<div class="stat-divider" />
			<div class="stat-item">
				<span class="stat-value">Node.js</span>
				<span class="stat-label">Backend</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.editorial-about {
		position: relative;
		padding: 3rem 0;
	}

	/* Oversized section number - editorial style */
	.section-number-wrapper {
		position: absolute;
		top: -2rem;
		left: -1rem;
		z-index: 1;
	}

	.section-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(8rem, 15vw, 12rem);
		font-weight: 400;
		line-height: 0.8;
		color: rgba(255, 200, 106, 0.08);
		display: block;
		letter-spacing: -0.05em;
		user-select: none;
	}

	/* Editorial grid layout */
	.content-grid {
		position: relative;
		z-index: 10;
		display: grid;
		gap: 2rem;
	}

	/* Title block with slash accent */
	.title-block {
		position: relative;
		margin-bottom: 2rem;
	}

	.title-wrapper {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.title-slash {
		font-size: clamp(3rem, 6vw, 5rem);
		color: #ffc86a;
		font-weight: 300;
		font-family: 'DM Serif Display', Georgia, serif;
		line-height: 1;
		font-style: italic;
	}

	.editorial-title {
		font-size: clamp(3rem, 6vw, 5rem);
		line-height: 0.9;
		letter-spacing: -0.03em;
		margin: 0;
		text-transform: uppercase;
		font-weight: 400;
	}

	.title-accent-line {
		width: 200px;
		height: 3px;
		background: linear-gradient(90deg, #ffc86a 0%, transparent 100%);
		margin-top: 1rem;
		transform-origin: left;
	}

	/* Main content area */
	.content-main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		.content-main {
			grid-template-columns: auto 1fr;
			gap: 3rem;
		}
	}

	/* Years badge - brutalist style */
	.years-badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(255, 200, 106, 0.1) 0%, rgba(237, 149, 0, 0.05) 100%);
		border: 2px solid rgba(255, 200, 106, 0.3);
		padding: 1.5rem 2rem;
		position: relative;
		width: fit-content;
		transform: skewY(-2deg);
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.years-badge:hover {
		transform: skewY(-2deg) scale(1.05);
		border-color: rgba(255, 200, 106, 0.6);
	}

	.years-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 3.5rem;
		line-height: 1;
		color: #ffc86a;
		font-weight: 400;
		display: block;
		letter-spacing: -0.02em;
	}

	.years-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #e4e4e5;
		margin-top: 0.5rem;
		text-align: center;
		line-height: 1.3;
	}

	/* Content text */
	.content-text {
		max-width: 65ch;
	}

	.lead-text {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		line-height: 1.4;
		color: #ffc86a;
		margin-bottom: 1.5rem;
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.body-text {
		font-size: clamp(1rem, 1.5vw, 1.125rem);
		line-height: 1.7;
		color: rgba(228, 228, 229, 0.85);
	}

	/* Stats panel - Swiss grid style */
	.stats-panel {
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr;
		gap: 2rem;
		margin-top: 3rem;
		padding: 2rem;
		background: rgba(61, 62, 66, 0.4);
		border-left: 3px solid #ffc86a;
		align-items: center;
	}

	@media (max-width: 768px) {
		.stats-panel {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.stat-divider {
			display: none;
		}
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.stat-value {
		font-size: 1.25rem;
		font-weight: 600;
		color: #ffffff;
		letter-spacing: 0.02em;
	}

	.stat-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(228, 228, 229, 0.5);
	}

	.stat-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 200, 106, 0.2);
	}
</style>
