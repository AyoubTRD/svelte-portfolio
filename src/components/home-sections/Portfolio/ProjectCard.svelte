<script lang="ts">
	import { fade, slide, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	import type { Project } from '../../../constants/projects';
	import Typography from '../../shared/Typography/Typography.svelte';
	import Button from '../../shared/Button/Button.svelte';

	export let project: Project;
	export let disableImages: boolean = false;
	export let index: number = 0;

	$: isEven = index % 2 === 0;
	$: isFeatured = index === 0;

	let animate = false;
</script>

<div 
	class="w-full"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	{#if animate}
		{#if isFeatured}
			<div class="text-sm text-primary font-medium mb-4" in:fade={{ delay: 100, duration: 400 }}>
				Featured Project
			</div>
		{/if}

		<!-- Mobile Layout: Unified box with text and image -->
		<div class="block lg:hidden">
			<div class="bg-secondary border border-neutral rounded-lg p-6 shadow-xl" in:fly={{ y: 30, delay: index * 200, duration: 600, easing: quintOut }}>
				<div class="space-y-6">
					<!-- Content Section -->
					<div class="space-y-4" in:slide={{ delay: 200, duration: 500, easing: quintOut }}>
						<div in:fade={{ delay: 300, duration: 400 }}>
							<Typography type="title">
								<h3 class="text-xl font-bold text-primary mb-2">{project.name}</h3>
							</Typography>
							<Typography>
								<p class="text-sm leading-relaxed">{project.shortDescription}</p>
							</Typography>
						</div>

						<!-- Tech Stack -->
						<div class="flex flex-wrap gap-2">
							{#each project.techStack.slice(0, 4) as tech, i}
								<span
									class="px-2 py-1 bg-neutral border border-neutral rounded-full text-xs text-typography"
									in:fly={{ y: 10, delay: 400 + i * 50, duration: 300, easing: quintOut }}
								>
									{tech}
								</span>
							{/each}
						</div>

						<!-- CTA Button -->
						<div class="pt-2" in:fade={{ delay: 500, duration: 400 }}>
							<a href="/projects/{project.id}?delay=2200">
								<Button size="sm">Learn More</Button>
							</a>
						</div>
					</div>

					<!-- Image Section inside the same box -->
					<div class="flex justify-center" in:fly={{ y: 20, delay: 600, duration: 600, easing: quintOut }}>
						<div class="w-3/4">
							<div class="bg-neutral rounded-lg p-4">
								<img
									class="bg-white w-full aspect-square object-contain rounded"
									src={disableImages ? 'data:image/base64;' : project.thumbnail}
									alt={project.name + ' thumbnail'}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop Layout: Overlapping Design -->
		<div class="hidden lg:block">
			<div class="relative">
				<!-- Image Section -->
				<div 
					class="flex" 
					class:justify-end={!isEven}
					in:fly={{ x: isEven ? -50 : 50, delay: index * 200, duration: 600, easing: quintOut }}
				>
					<div class="w-1/2">
						<div class="bg-neutral rounded-lg p-6">
							<img
								class="w-full bg-white aspect-square object-contain rounded"
								src={disableImages ? 'data:image/base64;' : project.thumbnail}
								alt={project.name + ' thumbnail'}
							/>
						</div>
					</div>
				</div>

				<!-- Overlapping Content Box -->
				<div 
					class="absolute top-1/2 -translate-y-1/2 w-1/2 z-10" 
					class:right-12={isEven}
					class:left-12={!isEven}
					in:fly={{ x: isEven ? 50 : -50, delay: 300, duration: 600, easing: quintOut }}
				>
					<div class="bg-secondary border border-neutral rounded-lg p-8 shadow-xl">
						<div class="space-y-4">
							<div in:fade={{ delay: 500, duration: 400 }}>
								<Typography type="title">
									<h3 class="text-2xl font-bold text-primary mb-2">{project.name}</h3>
								</Typography>
								<Typography>
									<p class="text-base leading-relaxed">{project.shortDescription}</p>
								</Typography>
							</div>

							<!-- Tech Stack -->
							<div class="flex flex-wrap gap-2">
								{#each project.techStack.slice(0, 4) as tech, i}
									<span
										class="px-2 py-1 bg-neutral border border-neutral rounded-full text-xs text-typography"
										in:fly={{ y: 10, delay: 600 + i * 50, duration: 300, easing: quintOut }}
									>
										{tech}
									</span>
								{/each}
							</div>

							<!-- CTA Button -->
							<div class="pt-2" in:fade={{ delay: 700, duration: 400 }}>
								<a href="/projects/{project.id}?delay=2200">
									<Button size="sm">Learn More</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="opacity-0">
			{#if isFeatured}
				<div class="text-sm text-primary font-medium mb-4">Featured Project</div>
			{/if}
			
			<!-- Mobile Layout: Hidden placeholder -->
			<div class="block lg:hidden">
				<div class="bg-secondary border border-neutral rounded-lg p-6 shadow-xl">
					<div class="space-y-6">
						<div class="space-y-4">
							<div>
								<Typography type="title">
									<h3 class="text-xl font-bold text-primary mb-2">{project.name}</h3>
								</Typography>
								<Typography>
									<p class="text-sm leading-relaxed">{project.shortDescription}</p>
								</Typography>
							</div>
							<div class="flex flex-wrap gap-2">
								{#each project.techStack.slice(0, 4) as tech}
									<span class="px-2 py-1 bg-neutral border border-neutral rounded-full text-xs text-typography">
										{tech}
									</span>
								{/each}
							</div>
							<div class="pt-2">
								<a href="/projects/{project.id}?delay=2200">
									<Button size="sm">Learn More</Button>
								</a>
							</div>
						</div>
						<div class="flex justify-center">
							<div class="w-3/4">
								<div class="bg-neutral rounded-lg p-4">
									<img
										class="bg-white w-full aspect-square object-contain rounded"
										src={disableImages ? 'data:image/base64;' : project.thumbnail}
										alt={project.name + ' thumbnail'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Desktop Layout: Hidden placeholder -->
			<div class="hidden lg:block">
				<div class="relative">
					<div class="flex" class:justify-end={!isEven}>
						<div class="w-1/2">
							<div class="bg-neutral rounded-lg p-6">
								<img
									class="w-full bg-white aspect-square object-contain rounded"
									src={disableImages ? 'data:image/base64;' : project.thumbnail}
									alt={project.name + ' thumbnail'}
								/>
							</div>
						</div>
					</div>
					<div 
						class="absolute top-1/2 -translate-y-1/2 w-1/2 z-10" 
						class:right-12={isEven}
						class:left-12={!isEven}
					>
						<div class="bg-secondary border border-neutral rounded-lg p-8 shadow-xl">
							<div class="space-y-4">
								<div>
									<Typography type="title">
										<h3 class="text-2xl font-bold text-primary mb-2">{project.name}</h3>
									</Typography>
									<Typography>
										<p class="text-base leading-relaxed">{project.shortDescription}</p>
									</Typography>
								</div>
								<div class="flex flex-wrap gap-2">
									{#each project.techStack.slice(0, 4) as tech}
										<span class="px-2 py-1 bg-neutral border border-neutral rounded-full text-xs text-typography">
											{tech}
										</span>
									{/each}
								</div>
								<div class="pt-2">
									<a href="/projects/{project.id}?delay=2200">
										<Button size="sm">Learn More</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
