<script lang="ts">
	import type { Project } from '../../../constants/projects';

	import { fade, slide } from 'svelte/transition';

	import Typography from '../../shared/Typography/Typography.svelte';
	import { onMount } from 'svelte';
	import Carousel from '../../shared/Carousel/Carousel.svelte';
	import Tag from '../../shared/Tag/Tag.svelte';
	import Button from '../../shared/Button/Button.svelte';
	import Modal from '../../shared/Modal/Modal.svelte';

	export let project: Project;

	let animate = false;

	let sectionStaggerDelay = 400;

	let listItemStaggerDelay = 150;

	onMount(() => {
		animate = true;
	});

	let showCarouselModal = false;
</script>

{#if animate}
	<div class="py-10 grid lg:grid-cols-12 gap-20">
		<div class="lg:col-span-7 col-span-full space-y-8 container !px-0">
			<Typography inline type="title">
				<h1 in:slide>{project?.name}</h1>
			</Typography>

			<div in:fade={{ delay: sectionStaggerDelay }}>
				<h2 in:slide={{ delay: sectionStaggerDelay }}>Description</h2>
				<Typography type="body">
					<p in:slide={{ delay: sectionStaggerDelay + listItemStaggerDelay }}>
						{@html project.description}
					</p>
				</Typography>
			</div>

			{#if project.tasksWorkedOn?.length}
				<div in:fade={{ delay: sectionStaggerDelay * 2 }}>
					<h2 in:slide={{ delay: sectionStaggerDelay * 2 }}>What I have done</h2>

					<ul>
						{#each project.tasksWorkedOn as task, i}
							<li in:fade={{ delay: sectionStaggerDelay * 2 + listItemStaggerDelay * (i + 1) }}>
								<Typography type="body">
									<p>
										– {task}
									</p>
								</Typography>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<div in:fade={{ delay: sectionStaggerDelay * 2 }}>
				<h2 in:slide={{ delay: sectionStaggerDelay * 2 }}>Tech Stack</h2>

				<ul>
					{#each project.techStack as technology, i}
						<li in:fade={{ delay: sectionStaggerDelay * 2 + listItemStaggerDelay * (i + 1) }}>
							<Typography type="body">
								<p>
									– {technology}
								</p>
							</Typography>
						</li>
					{/each}
				</ul>
			</div>

			<div in:fade={{ delay: sectionStaggerDelay * 3 }}>
				<h2 in:slide={{ delay: sectionStaggerDelay * 3 }}>Features</h2>

				<ul>
					{#each project.features as feature, i}
						<li in:fade={{ delay: sectionStaggerDelay * 3 + listItemStaggerDelay * (i + 1) }}>
							<Typography type="body">
								<p>
									– {feature}
								</p>
							</Typography>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="lg:col-span-5 col-span-full container !px-0 !max-w-[calc(100vw-2.5rem)]">
			{#if project.images.length}
				<div in:fade={{ delay: sectionStaggerDelay }}>
					<h2 class="!mb-3">Images</h2>
					<div class="relative">
						<button
							on:click={() => (showCarouselModal = true)}
							class="z-10 absolute top-2 right-2 origin-top-right transition-all scale-100 hover:scale-125 text-secondary text-xl"
							><ion-icon name="expand-outline" /></button
						>
						<Carousel images={project.images} aspectRatio={project.imagesAspectRatio} />
					</div>
				</div>
			{/if}

			<div class="my-8 flex items-center space-x-3 flex-wrap">
				{#each project.tags as tag, i}
					<div in:slide={{ delay: sectionStaggerDelay * 2 + i * listItemStaggerDelay }}>
						<Tag>{tag}</Tag>
					</div>
				{/each}
			</div>

			<div in:slide={{ delay: sectionStaggerDelay * 5 }}>
				{#if project.previewUrl}
					<a href={project.previewUrl} target="_blank">
						<Button fullWidth>Live Preview</Button>
					</a>
				{:else}
					<p>No live preview available for this project.</p>
				{/if}
			</div>

			<div class="mt-8">
				<h2
					in:slide={{ delay: sectionStaggerDelay * 6 }}
					class:!mb-4={project.sourceCode.length > 0}
				>
					Source Code
				</h2>
				{#if !project.sourceCode.length}
					<p in:slide={{ delay: sectionStaggerDelay * 6 + listItemStaggerDelay }}>
						The source code for this project is private and can't be shared.
					</p>
				{:else}
					{#each project.sourceCode as source, i}
						<a
							class="mb-2 block"
							href={source.url}
							target="_blank"
							in:fade={{ delay: sectionStaggerDelay * 6 + i * listItemStaggerDelay }}
						>
							<Button fullWidth type="outlined">{source.label}</Button>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}

<Modal showModal={showCarouselModal} on:close={() => (showCarouselModal = false)}>
	<div class="max-w-[min(100vw,656px)] max-h-[100vh]">
		<Carousel images={project.images} />
	</div>
</Modal>

<style lang="postcss">
	h2 {
		@apply mb-1 text-xl font-bold;
	}
	p,
	li {
		@apply opacity-80;
	}
</style>
