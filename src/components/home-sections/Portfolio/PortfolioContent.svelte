<script lang="ts">
	import Typography from '../../shared/Typography/Typography.svelte';
	import { projects } from '../../../constants/projects';
	import { reveal } from '../../../transitions/reveal';

	export let disableImages: boolean;
</script>

<div class="editorial-portfolio">
	<!-- Section number -->
	<div class="section-number-wrapper">
		<span class="section-number" in:reveal={{ duration: 800, y: 24, start: 0.96 }}>03</span>
	</div>

	<!-- Title with rotated accent -->
	<div class="title-block">
		<div class="title-main" in:reveal={{ duration: 700, delay: 150, y: 20 }}>
			<Typography type="title">
				<h2 class="editorial-title">Selected Work</h2>
			</Typography>
		</div>
		<div class="title-meta" in:reveal={{ duration: 600, delay: 300, y: 12 }}>
			<span class="meta-line" />
			<span class="meta-text">{projects.length} Projects</span>
			<span class="meta-line" />
		</div>
	</div>

	<!-- Magazine-style project grid -->
	<div class="projects-layout">
		{#each projects as project, i}
			{@const isEven = i % 2 === 0}
			{@const isFeatured = i === 0}

			<div
				class="project-card"
				class:featured={isFeatured}
				class:even={isEven}
				in:reveal={{
					duration: 800,
					delay: 240 + i * 140,
					y: 26,
					start: 0.95
				}}
			>
				<!-- Project number -->
				<div class="project-number-wrapper">
					<span class="project-number">{String(i + 1).padStart(2, '0')}</span>
				</div>

				<!-- Image section -->
				{#if !disableImages && project.images && project.images[0]}
					<div class="project-image-wrapper">
						<div class="image-overlay" />
						<img src={project.images[0]} alt={project.name} class="project-image" loading="lazy" />
						{#if isFeatured}
							<div class="featured-badge">Featured</div>
						{/if}
					</div>
				{/if}

				<!-- Content section -->
				<div class="project-content">
					<div class="content-header">
						<Typography type="title">
							<h3 class="project-title">{project.name}</h3>
						</Typography>
						<p class="project-description">{project.shortDescription}</p>
					</div>

					<!-- Tech stack tags -->
					<div class="tech-stack">
						{#each project.techStack.slice(0, 4) as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
						{#if project.techStack.length > 4}
							<span class="tech-tag more">+{project.techStack.length - 4}</span>
						{/if}
					</div>

					<!-- CTA -->
					<a href={`/projects/${project.id}`} class="project-link">
						<span class="link-text">View Project</span>
						<span class="link-arrow">→</span>
					</a>
				</div>

				<!-- Decorative diagonal accent -->
				<div class="diagonal-accent" />
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.editorial-portfolio {
		position: relative;
		padding: 4rem 0;
	}

	/* Section number */
	.section-number-wrapper {
		position: absolute;
		top: -2rem;
		left: 50%;
		transform: translateX(-50%);
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

	/* Title block */
	.title-block {
		text-align: center;
		margin-bottom: 4rem;
		position: relative;
		z-index: 10;
	}

	.editorial-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 0.95;
		letter-spacing: -0.03em;
		margin: 0 0 1.5rem 0;
		text-transform: uppercase;
		font-weight: 400;
	}

	.title-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	.meta-line {
		width: 60px;
		height: 1px;
		background: linear-gradient(90deg, transparent 0%, #ffc86a 50%, transparent 100%);
	}

	.meta-text {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(228, 228, 229, 0.6);
	}

	/* Projects layout - magazine grid */
	.projects-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		position: relative;
		z-index: 10;
	}

	@media (min-width: 1024px) {
		.projects-layout {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.5rem;
		}

		.project-card.featured {
			grid-column: span 2;
		}
	}

	/* Project card - editorial style */
	.project-card {
		position: relative;
		background: rgba(61, 62, 66, 0.4);
		border: 1px solid rgba(228, 228, 229, 0.1);
		overflow: hidden;
		transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
	}

	.project-card:hover {
		transform: translateY(-12px);
		border-color: rgba(255, 200, 106, 0.4);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
	}

	.project-card.featured {
		background: rgba(255, 200, 106, 0.05);
		border-color: rgba(255, 200, 106, 0.2);
	}

	/* Project number - corner stamp */
	.project-number-wrapper {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		z-index: 20;
		background: #ffc86a;
		color: #31333b;
		padding: 0.5rem 1rem;
		transform: rotate(3deg);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.project-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.25rem;
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	/* Image section */
	.project-image-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
	}

	.project-card.featured .project-image-wrapper {
		aspect-ratio: 21 / 9;
	}

	.project-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
		filter: grayscale(0.3);
	}

	.project-card:hover .project-image {
		transform: scale(1.08);
		filter: grayscale(0);
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 0%, rgba(49, 51, 59, 0.8) 100%);
		opacity: 0.6;
		transition: opacity 0.4s ease;
		z-index: 1;
	}

	.project-card:hover .image-overlay {
		opacity: 0.3;
	}

	.featured-badge {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		background: rgba(255, 200, 106, 0.95);
		color: #31333b;
		padding: 0.5rem 1.25rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		z-index: 2;
		transform: rotate(-2deg);
	}

	/* Content section */
	.project-content {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.project-card.featured .project-content {
		padding: 3rem;
	}

	.content-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.project-title {
		font-size: clamp(1.5rem, 3vw, 2rem);
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin: 0;
		color: #ffffff;
		font-weight: 600;
	}

	.project-card.featured .project-title {
		font-size: clamp(2rem, 4vw, 2.75rem);
	}

	.project-description {
		font-size: clamp(0.95rem, 1.5vw, 1.125rem);
		line-height: 1.6;
		color: rgba(228, 228, 229, 0.75);
	}

	/* Tech stack tags */
	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tech-tag {
		font-size: 0.8125rem;
		padding: 0.4rem 1rem;
		background: rgba(255, 200, 106, 0.1);
		border: 1px solid rgba(255, 200, 106, 0.3);
		color: #ffc86a;
		font-weight: 500;
		letter-spacing: 0.02em;
		transition: all 0.3s ease;
	}

	.tech-tag.more {
		background: rgba(228, 228, 229, 0.1);
		border-color: rgba(228, 228, 229, 0.3);
		color: rgba(228, 228, 229, 0.7);
	}

	.project-card:hover .tech-tag {
		background: rgba(255, 200, 106, 0.15);
		border-color: rgba(255, 200, 106, 0.5);
	}

	/* Project link */
	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1rem;
		font-weight: 600;
		color: #ffc86a;
		text-decoration: none;
		margin-top: auto;
		width: fit-content;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.link-text {
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.link-arrow {
		font-size: 1.25rem;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.project-link:hover {
		color: #ffd080;
	}

	.project-link:hover .link-arrow {
		transform: translateX(6px);
	}

	/* Diagonal accent */
	.diagonal-accent {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200px;
		height: 4px;
		background: linear-gradient(90deg, #ffc86a 0%, transparent 100%);
		transform-origin: bottom left;
		transform: scaleX(0);
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.project-card:hover .diagonal-accent {
		transform: scaleX(1);
	}
</style>
