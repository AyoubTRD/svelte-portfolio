<script lang="ts">
	import Typography from '../../shared/Typography/Typography.svelte';
	import { skills } from '../../../constants/skills';
	import { reveal } from '../../../transitions/reveal';
</script>

<div class="editorial-skills">
	<!-- Section number -->
	<div class="section-number-wrapper">
		<span class="section-number" in:reveal={{ duration: 800, y: 24, start: 0.96 }}>02</span>
	</div>

	<!-- Title with diagonal cut -->
	<div class="title-block" in:reveal={{ duration: 700, delay: 120, x: -24 }}>
		<div class="diagonal-accent" />
		<Typography type="title">
			<h2 class="editorial-title">Technical Arsenal</h2>
		</Typography>
		<span class="title-subtitle">Tools & Technologies</span>
	</div>

	<!-- Bento-style grid layout -->
	<div class="skills-grid">
		{#each skills as skill, i}
			<div
				class="skill-cell"
				class:featured={i === 0 || i === 2}
				in:reveal={{
					duration: 700,
					delay: 220 + i * 70,
					y: 24,
					start: 0.94
				}}
			>
				<div class="skill-content">
					<!-- Index number -->
					<span class="skill-index">{String(i + 1).padStart(2, '0')}</span>

					<!-- Skill icon with glow -->
					<div class="skill-icon-wrapper">
						<div class="icon-glow" />
						<img src={skill.image} alt={skill.label} class="skill-icon" />
					</div>

					<!-- Skill label -->
					<div class="skill-label-wrapper">
						<span class="skill-label">{skill.label}</span>
						<div class="skill-underline" />
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Floating accent element -->
	<div class="floating-accent" in:reveal={{ duration: 900, delay: 700, y: 12 }}>
		<span class="accent-text">Core Stack</span>
	</div>
</div>

<style lang="postcss">
	.editorial-skills {
		position: relative;
		padding: 4rem 0;
	}

	/* Section number */
	.section-number-wrapper {
		position: absolute;
		top: -1rem;
		right: -1rem;
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

	/* Title block with diagonal accent */
	.title-block {
		position: relative;
		margin-bottom: 3rem;
		padding-left: 1.5rem;
		z-index: 10;
	}

	.diagonal-accent {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, #ffc86a 0%, #ed9500 100%);
		transform: skewY(-3deg);
	}

	.editorial-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 0.95;
		letter-spacing: -0.03em;
		margin: 0;
		text-transform: uppercase;
		font-weight: 400;
	}

	.title-subtitle {
		display: block;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(228, 228, 229, 0.5);
		margin-top: 0.75rem;
	}

	/* Bento-style grid - asymmetric */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		position: relative;
		z-index: 10;
	}

	@media (min-width: 1024px) {
		.skills-grid {
			grid-template-columns: repeat(4, 1fr);
		}

		.skill-cell.featured {
			grid-column: span 2;
		}
	}

	/* Skill cell - brutalist card */
	.skill-cell {
		background: rgba(61, 62, 66, 0.3);
		border: 1px solid rgba(228, 228, 229, 0.1);
		padding: 2rem;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
	}

	.skill-cell::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, transparent 0%, #ffc86a 50%, transparent 100%);
		transform: scaleX(0);
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.skill-cell:hover::before {
		transform: scaleX(1);
	}

	.skill-cell:hover {
		background: rgba(61, 62, 66, 0.6);
		border-color: rgba(255, 200, 106, 0.3);
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.skill-cell.featured {
		background: rgba(255, 200, 106, 0.05);
		border-color: rgba(255, 200, 106, 0.2);
	}

	/* Skill content */
	.skill-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		z-index: 2;
	}

	/* Index number - top corner */
	.skill-index {
		position: absolute;
		top: -0.5rem;
		right: -0.5rem;
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1rem;
		color: rgba(255, 200, 106, 0.3);
		font-weight: 400;
		letter-spacing: 0.05em;
	}

	/* Skill icon with glow effect */
	.skill-icon-wrapper {
		position: relative;
		width: fit-content;
		margin: 0 auto;
	}

	.icon-glow {
		position: absolute;
		inset: -20px;
		background: radial-gradient(circle, rgba(255, 200, 106, 0.15) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 0.4s ease;
		border-radius: 50%;
	}

	.skill-cell:hover .icon-glow {
		opacity: 1;
	}

	.skill-icon {
		width: 80px;
		height: 80px;
		object-fit: contain;
		filter: grayscale(0.3);
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
		z-index: 2;
	}

	.skill-cell.featured .skill-icon {
		width: 100px;
		height: 100px;
	}

	.skill-cell:hover .skill-icon {
		filter: grayscale(0);
		transform: scale(1.1) rotate(5deg);
	}

	/* Skill label */
	.skill-label-wrapper {
		text-align: center;
	}

	.skill-label {
		font-size: 1.125rem;
		font-weight: 600;
		color: #ffffff;
		display: block;
		letter-spacing: 0.02em;
	}

	.skill-cell.featured .skill-label {
		font-size: 1.375rem;
	}

	.skill-underline {
		width: 40px;
		height: 2px;
		background: #ffc86a;
		margin: 0.75rem auto 0;
		transform: scaleX(0);
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.skill-cell:hover .skill-underline {
		transform: scaleX(1);
	}

	/* Floating accent - architectural element */
	.floating-accent {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		background: linear-gradient(135deg, #ffc86a 0%, #ed9500 100%);
		color: #31333b;
		padding: 0.75rem 1.5rem;
		transform: rotate(-3deg);
		z-index: 5;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.accent-text {
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	@media (max-width: 768px) {
		.floating-accent {
			position: static;
			margin-top: 2rem;
			width: fit-content;
		}
	}
</style>
