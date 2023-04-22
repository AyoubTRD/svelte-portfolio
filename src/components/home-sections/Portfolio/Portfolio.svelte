<script lang="ts">
	import { inview } from 'svelte-inview';

	import Typography from '../../shared/Typography/Typography.svelte';

	import { projects } from '../../../constants/projects';
	import { fade, slide } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';
	import BackgroundDots from '../../shared/BackgroundDots/BackgroundDots.svelte';

	let animate = false;
</script>

<section
	id="portfolio"
	class="relative"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-25%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-20 pb-28">
		{#if animate}
			<BackgroundDots position="bottom left" />

			<Typography type="title">
				<h2 class="section-title text-center" transition:slide>Portfolio</h2>
			</Typography>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each projects as project, i}
					<div transition:fade={{ duration: 300, delay: i * 100 }}>
						<ProjectCard {project} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="h-56" />
		{/if}
	</div>
</section>
