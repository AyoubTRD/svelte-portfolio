<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Typography from '../../shared/Typography/Typography.svelte';
	import { projects } from '../../../constants/projects';
	import ProjectCard from './ProjectCard.svelte';

	export let disableImages: boolean;
</script>

<Typography type="title">
	<h2 class="section-title text-center" in:slide>Portfolio</h2>
</Typography>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each projects as project, i}
		<div in:fade={{ duration: 400, delay: i * 250 }}>
			<ProjectCard {project} {disableImages} />
		</div>
	{/each}
</div>
