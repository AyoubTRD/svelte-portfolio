<script lang="ts">
	import type { Project } from '../../../constants/projects';

	import { fade, slide, scale } from 'svelte/transition';
	import { expoOut, backOut } from 'svelte/easing';

	import Carousel from '../../shared/Carousel/Carousel.svelte';
	import Modal from '../../shared/Modal/Modal.svelte';
	import { onMount } from 'svelte';

	export let project: Project;

	let animate = false;
	let currentImageIndex = 0;
	let showCarouselModal = false;

	onMount(() => {
		animate = true;
	});

	function openGallery(index: number) {
		currentImageIndex = index;
		showCarouselModal = true;
	}
</script>

{#if animate}
	<article class="project-article">
		<!-- Hero Section -->
		<div class="project-hero" in:fade={{ duration: 600 }}>
			<div class="hero-container">
				<!-- Breadcrumb -->
				<nav class="breadcrumb" in:slide={{ axis: 'x', duration: 600, delay: 200, easing: expoOut }}>
					<a href="/" class="breadcrumb-link">Home</a>
					<span class="breadcrumb-separator">/</span>
					<a href="/#portfolio" class="breadcrumb-link">Portfolio</a>
					<span class="breadcrumb-separator">/</span>
					<span class="breadcrumb-current">{project.name}</span>
				</nav>

				<!-- Project Title -->
				<h1 class="project-title" in:slide={{ axis: 'y', duration: 800, delay: 400, easing: expoOut }}>
					{project.name}
				</h1>

				<!-- Meta bar -->
				<div class="meta-bar" in:fade={{ duration: 600, delay: 600 }}>
					<div class="meta-item">
						<span class="meta-label">Status</span>
						<span class="meta-value">{project.completed ? 'Completed' : 'In Progress'}</span>
					</div>
					<div class="meta-divider"></div>
					<div class="meta-item">
						<span class="meta-label">Tech Stack</span>
						<span class="meta-value">{project.techStack.length} Technologies</span>
					</div>
					<div class="meta-divider"></div>
					<div class="meta-item">
						<span class="meta-label">Features</span>
						<span class="meta-value">{project.features.length} Key Features</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Main Content Grid -->
		<div class="content-wrapper">
			<!-- Left Column: Content -->
			<div class="content-column">
				<!-- Description Section -->
				<section class="content-section" in:fade={{ duration: 600, delay: 800 }}>
					<h2 class="section-heading">
						<span class="heading-number">01</span>
						<span class="heading-text">Overview</span>
					</h2>
					<div class="section-body">
						<p class="lead-text">{project.shortDescription}</p>
						<div class="description-text">
							{@html project.description}
						</div>
					</div>
				</section>

				<!-- Tech Stack Section -->
				<section class="content-section" in:fade={{ duration: 600, delay: 1000 }}>
					<h2 class="section-heading">
						<span class="heading-number">02</span>
						<span class="heading-text">Technology Stack</span>
					</h2>
					<div class="tech-grid">
						{#each project.techStack as tech, i}
							<div class="tech-card" in:scale={{ duration: 400, delay: 1200 + i * 80, easing: backOut, start: 0.8 }}>
								<span class="tech-name">{tech}</span>
							</div>
						{/each}
					</div>
				</section>

				<!-- Features Section -->
				<section class="content-section" in:fade={{ duration: 600, delay: 1200 }}>
					<h2 class="section-heading">
						<span class="heading-number">03</span>
						<span class="heading-text">Key Features</span>
					</h2>
					<ul class="features-list">
						{#each project.features as feature, i}
							<li class="feature-item" in:slide={{ axis: 'x', duration: 500, delay: 1400 + i * 100, easing: expoOut }}>
								<div class="feature-marker"></div>
								<span class="feature-text">{feature}</span>
							</li>
						{/each}
					</ul>
				</section>

				<!-- Tasks Section (if exists) -->
				{#if project.tasksWorkedOn?.length}
					<section class="content-section" in:fade={{ duration: 600, delay: 1400 }}>
						<h2 class="section-heading">
							<span class="heading-number">04</span>
							<span class="heading-text">My Contributions</span>
						</h2>
						<ul class="tasks-list">
							{#each project.tasksWorkedOn as task, i}
								<li class="task-item" in:slide={{ axis: 'x', duration: 500, delay: 1600 + i * 100, easing: expoOut }}>
									<div class="task-marker"></div>
									<span class="task-text">{task}</span>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			</div>

			<!-- Right Column: Sidebar -->
			<aside class="sidebar-column">
				<!-- Image Gallery -->
				{#if project.images.length}
					<div class="sidebar-section gallery-section" in:fade={{ duration: 600, delay: 800 }}>
						<h3 class="sidebar-heading">Gallery</h3>
						<div class="gallery-grid">
							{#each project.images as image, i}
								<button
									class="gallery-item"
									on:click={() => openGallery(i)}
									in:scale={{ duration: 500, delay: 1000 + i * 100, easing: backOut, start: 0.85 }}
								>
									<img src={image} alt="{project.name} screenshot {i + 1}" class="gallery-image" />
									<div class="gallery-overlay">
										<ion-icon name="expand-outline" class="gallery-icon"></ion-icon>
									</div>
								</button>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Tags -->
				<div class="sidebar-section tags-section" in:fade={{ duration: 600, delay: 1200 }}>
					<h3 class="sidebar-heading">Categories</h3>
					<div class="tags-wrapper">
						{#each project.tags as tag, i}
							<span class="tag-item" in:scale={{ duration: 400, delay: 1400 + i * 80, easing: backOut, start: 0.8 }}>
								{tag}
							</span>
						{/each}
					</div>
				</div>

				<!-- Actions -->
				<div class="sidebar-section actions-section" in:fade={{ duration: 600, delay: 1400 }}>
					<h3 class="sidebar-heading">Project Links</h3>

					{#if project.previewUrl}
						<a href={project.previewUrl} target="_blank" rel="noopener noreferrer" class="action-button primary">
							<span class="button-text">Live Preview</span>
							<ion-icon name="open-outline" class="button-icon"></ion-icon>
						</a>
					{:else}
						<div class="no-preview">
							<ion-icon name="lock-closed-outline" class="no-preview-icon"></ion-icon>
							<span class="no-preview-text">No live preview available</span>
						</div>
					{/if}

					{#if project.sourceCode.length}
						{#each project.sourceCode as source}
							<a href={source.url} target="_blank" rel="noopener noreferrer" class="action-button secondary">
								<span class="button-text">{source.label}</span>
								<ion-icon name="logo-github" class="button-icon"></ion-icon>
							</a>
						{/each}
					{:else}
						<div class="no-source">
							<ion-icon name="lock-closed-outline" class="no-source-icon"></ion-icon>
							<span class="no-source-text">Private repository</span>
						</div>
					{/if}
				</div>

				<!-- Back to Portfolio -->
				<div class="sidebar-section back-section" in:fade={{ duration: 600, delay: 1600 }}>
					<a href="/#portfolio" class="back-link">
						<ion-icon name="arrow-back-outline" class="back-icon"></ion-icon>
						<span>Back to Portfolio</span>
					</a>
				</div>
			</aside>
		</div>
	</article>
{/if}

<Modal showModal={showCarouselModal} on:close={() => (showCarouselModal = false)}>
	<div class="max-w-[min(100vw,656px)] max-h-[100vh]">
		<Carousel images={project.images} />
	</div>
</Modal>

<style lang="postcss">
	/* Project Article Container */
	.project-article {
		min-height: 100vh;
		padding-bottom: 4rem;
	}

	/* Hero Section */
	.project-hero {
		background: linear-gradient(180deg, rgba(42, 43, 46, 1) 0%, rgba(49, 51, 59, 0.8) 100%);
		border-bottom: 1px solid rgba(255, 200, 106, 0.2);
		padding: 3rem 0;
		margin-bottom: 4rem;
	}

	.hero-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Breadcrumb */
	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.breadcrumb-link {
		font-size: 0.875rem;
		color: rgba(228, 228, 229, 0.6);
		text-decoration: none;
		transition: color 0.3s ease;
		font-weight: 500;
	}

	.breadcrumb-link:hover {
		color: #ffc86a;
	}

	.breadcrumb-separator {
		color: rgba(255, 200, 106, 0.3);
		font-weight: 300;
	}

	.breadcrumb-current {
		font-size: 0.875rem;
		color: #ffc86a;
		font-weight: 600;
	}

	/* Project Title */
	.project-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(2.5rem, 6vw, 5rem);
		line-height: 1;
		letter-spacing: -0.03em;
		color: #ffc86a;
		margin: 0 0 2rem 0;
		font-weight: 400;
		text-shadow: 0 4px 20px rgba(255, 200, 106, 0.2);
	}

	/* Meta Bar */
	.meta-bar {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1.5rem;
		background: rgba(61, 62, 66, 0.4);
		border-left: 3px solid #ffc86a;
		flex-wrap: wrap;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.meta-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(228, 228, 229, 0.5);
		font-weight: 600;
	}

	.meta-value {
		font-size: 1rem;
		font-weight: 600;
		color: #ffffff;
	}

	.meta-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 200, 106, 0.2);
	}

	@media (max-width: 640px) {
		.meta-divider {
			display: none;
		}
	}

	/* Content Wrapper */
	.content-wrapper {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 4rem;
	}

	@media (min-width: 1024px) {
		.content-wrapper {
			grid-template-columns: 1.5fr 1fr;
		}
	}

	/* Content Column */
	.content-column {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	/* Content Section */
	.content-section {
		position: relative;
	}

	/* Section Heading */
	.section-heading {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid rgba(255, 200, 106, 0.2);
	}

	.heading-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.5rem;
		color: rgba(255, 200, 106, 0.5);
		font-weight: 400;
	}

	.heading-text {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #ffffff;
	}

	/* Section Body */
	.section-body {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.lead-text {
		font-size: 1.25rem;
		line-height: 1.6;
		color: #ffc86a;
		font-weight: 500;
		margin: 0;
	}

	.description-text {
		font-size: 1.0625rem;
		line-height: 1.7;
		color: rgba(228, 228, 229, 0.85);
	}

	.description-text :global(p) {
		margin-bottom: 1rem;
	}

	.description-text :global(strong) {
		color: #ffc86a;
		font-weight: 600;
	}

	/* Tech Grid */
	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1rem;
	}

	.tech-card {
		background: rgba(61, 62, 66, 0.4);
		border: 1px solid rgba(255, 200, 106, 0.2);
		padding: 1rem 1.25rem;
		text-align: center;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
	}

	.tech-card::before {
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

	.tech-card:hover {
		background: rgba(61, 62, 66, 0.6);
		border-color: rgba(255, 200, 106, 0.4);
		transform: translateY(-4px);
	}

	.tech-card:hover::before {
		transform: scaleX(1);
	}

	.tech-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #ffffff;
	}

	/* Features List */
	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem;
		background: rgba(61, 62, 66, 0.3);
		border-left: 3px solid rgba(255, 200, 106, 0.3);
		transition: all 0.3s ease;
	}

	.feature-item:hover {
		background: rgba(61, 62, 66, 0.5);
		border-left-color: #ffc86a;
		transform: translateX(4px);
	}

	.feature-marker {
		width: 8px;
		height: 8px;
		background: #ffc86a;
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 0.5rem;
	}

	.feature-text {
		flex: 1;
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(228, 228, 229, 0.85);
	}

	/* Tasks List */
	.tasks-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.task-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 0.75rem 0;
	}

	.task-marker {
		width: 6px;
		height: 6px;
		background: rgba(255, 200, 106, 0.6);
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 0.5rem;
	}

	.task-text {
		flex: 1;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: rgba(228, 228, 229, 0.8);
	}

	/* Sidebar Column */
	.sidebar-column {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/* Sidebar Section */
	.sidebar-section {
		background: rgba(61, 62, 66, 0.3);
		border: 1px solid rgba(255, 200, 106, 0.1);
		padding: 2rem;
	}

	.sidebar-heading {
		font-family: 'Montserrat', sans-serif;
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #ffc86a;
		margin: 0 0 1.5rem 0;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid rgba(255, 200, 106, 0.2);
	}

	/* Gallery Grid */
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1rem;
	}

	.gallery-item {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		border: 1px solid rgba(255, 200, 106, 0.2);
		background: rgba(42, 43, 46, 0.6);
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		padding: 0;
	}

	.gallery-item:hover {
		border-color: rgba(255, 200, 106, 0.6);
		transform: scale(1.05);
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.gallery-item:hover .gallery-image {
		transform: scale(1.1);
	}

	.gallery-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.gallery-item:hover .gallery-overlay {
		opacity: 1;
	}

	.gallery-icon {
		font-size: 2rem;
		color: #ffc86a;
	}

	/* Tags */
	.tags-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tag-item {
		font-size: 0.8125rem;
		padding: 0.5rem 1rem;
		background: rgba(255, 200, 106, 0.1);
		border: 1px solid rgba(255, 200, 106, 0.3);
		color: #ffc86a;
		font-weight: 600;
		letter-spacing: 0.02em;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.tag-item:hover {
		background: rgba(255, 200, 106, 0.2);
		border-color: rgba(255, 200, 106, 0.6);
	}

	/* Action Buttons */
	.action-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 1.5rem;
		margin-bottom: 1rem;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
		overflow: hidden;
	}

	.action-button.primary {
		background: #ffc86a;
		color: #2a2b2e;
		border: 2px solid #ffc86a;
	}

	.action-button.primary::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.6s;
	}

	.action-button.primary:hover::before {
		left: 100%;
	}

	.action-button.primary:hover {
		background: #ffd080;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(255, 200, 106, 0.4);
	}

	.action-button.secondary {
		background: transparent;
		color: #ffc86a;
		border: 2px solid rgba(255, 200, 106, 0.4);
	}

	.action-button.secondary:hover {
		background: rgba(255, 200, 106, 0.1);
		border-color: #ffc86a;
	}

	.button-icon {
		font-size: 1.25rem;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.action-button:hover .button-icon {
		transform: translateX(4px);
	}

	/* No Preview/Source */
	.no-preview,
	.no-source {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: rgba(228, 228, 229, 0.05);
		border: 1px solid rgba(228, 228, 229, 0.1);
		margin-bottom: 1rem;
	}

	.no-preview-icon,
	.no-source-icon {
		font-size: 1.25rem;
		color: rgba(228, 228, 229, 0.5);
	}

	.no-preview-text,
	.no-source-text {
		font-size: 0.875rem;
		color: rgba(228, 228, 229, 0.6);
	}

	/* Back Link */
	.back-section {
		background: transparent;
		border: none;
		padding: 0;
	}

	.back-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9375rem;
		font-weight: 600;
		color: rgba(228, 228, 229, 0.7);
		text-decoration: none;
		transition: all 0.3s ease;
		padding: 0.75rem 0;
	}

	.back-link:hover {
		color: #ffc86a;
	}

	.back-icon {
		font-size: 1.25rem;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.back-link:hover .back-icon {
		transform: translateX(-4px);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.project-hero {
			padding: 2rem 0;
			margin-bottom: 2rem;
		}

		.hero-container {
			padding: 0 1.5rem;
		}

		.content-wrapper {
			padding: 0 1.5rem;
			gap: 3rem;
		}

		.content-column {
			gap: 3rem;
		}

		.sidebar-section {
			padding: 1.5rem;
		}

		.tech-grid {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		}
	}
</style>
