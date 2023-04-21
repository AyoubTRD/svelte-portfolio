<script lang="ts">
	import { inview } from 'svelte-inview';
	import Typography from '../../shared/Typography/Typography.svelte';
	import { fade, slide } from 'svelte/transition';
	import SkillCard from './SkillCard.svelte';

	let animate = false;

	const skills = [
		{
			label: 'Typescript',
			image: '/skills/typescript-icon.svg'
		},
		{
			label: 'React',
			image: '/skills/react-js-icon.svg'
		},
		{
			label: 'Angular',
			image: '/skills/angular-icon.svg'
		},
		{
			label: 'TailwindCSS',
			image: '/skills/tailwind-css-icon.svg'
		},
		{
			label: 'Flutter',
			image: '/skills/flutter-icon.svg'
		},
		{
			label: 'Node.JS',
			image: '/skills/node-js-icon.svg'
		},
		{
			label: 'GraphQL',
			image: '/skills/graphql-icon.svg'
		},
		{
			label: 'MongoDB',
			image: '/skills/mongodb-icon.svg'
		}
	];
</script>

<section
	id="skills"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-25%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-16">
		{#if animate}
			<Typography type="title"
				><h2 transition:slide={{ duration: 500 }} class="section-title text-center">
					My Skills
				</h2></Typography
			>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
				{#each skills as skill, i}
					<div transition:fade={{ duration: 200, delay: i * 100 }}>
						<SkillCard image={skill.image} label={skill.label} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
