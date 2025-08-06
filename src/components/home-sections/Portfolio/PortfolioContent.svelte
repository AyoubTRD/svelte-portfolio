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

<div class="space-y-12 lg:space-y-24">
	{#each projects as project, i}
		<div in:fade={{ duration: 400, delay: i * 200 }}>
			<ProjectCard {project} {disableImages} index={i} />
		</div>
	{/each}
</div>
