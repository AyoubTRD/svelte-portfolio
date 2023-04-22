<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Typography from '../../shared/Typography/Typography.svelte';
	import { skills } from '../../../constants/skills';
	import SkillCard from './SkillCard.svelte';
</script>

<Typography type="title"
	><h2 in:slide={{ duration: 500 }} class="section-title text-center">My Skills</h2></Typography
>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
	{#each skills as skill, i}
		<div in:fade={{ duration: 300, delay: i * 100 }}>
			<SkillCard image={skill.image} label={skill.label} />
		</div>
	{/each}
</div>
