<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import type { Project } from '../../../constants/projects';
	import Typography from '../../shared/Typography/Typography.svelte';
	import Button from '../../shared/Button/Button.svelte';

	export let project: Project;

	let showInfo = false;
</script>

<div
	class="w-full aspect-square relative bg-white rounded overflow-hidden"
	on:mouseenter={() => (showInfo = true)}
	on:mouseleave={() => (showInfo = false)}
>
	<img
		class="absolute w-full h-full top-0 left-0 object-contain"
		src={project.thumbnail}
		alt={project.name + ' thumbnail'}
	/>

	{#if showInfo}
		<div
			transition:fade
			class="absolute top-0 left-0 z-10 bg-secondary bg-opacity-70 w-full h-full flex items-center"
		>
			<div transition:slide={{ delay: 100 }} class="text-center w-full">
				<h6 class="text-xl font-sans-2 font-bold">{project.name}</h6>
				<Typography><p class="text-sm">{project.shortDescription}</p></Typography>
				<a class="flex justify-center mt-3" href="/projects/{project.id}?delay=2200">
					<Button size="md">See more</Button>
				</a>
			</div>
		</div>
	{/if}
</div>
