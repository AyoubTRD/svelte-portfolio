<script lang="ts">
	import { inview } from 'svelte-inview';
	import { experiences } from '../../../constants/experiences';
	import Typography from '../../shared/Typography/Typography.svelte';
	import { fade, scale, slide } from 'svelte/transition';

	let animate = false;

	const staggerDelay = 500;
	const staticDelay = 400;
</script>

<section
	id="experience"
	class="relative bg-neutral"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	{#if animate}
		<div
			transition:slide
			class="container mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
		>
			<Typography type="title"><h2>Experience</h2></Typography>
		</div>

		<div class="container mx-auto py-28">
			<div class="space-y-4">
				{#each experiences as experience, i}
					<div class="flex md:ml-14">
						<div class="flex justify-between flex-col">
							<div
								class="bg-neutral-500 experience-date pl-3 w-28 h-fit whitespace-nowrap py-2 shadow-md"
								transition:slide={{ delay: i * staggerDelay + staticDelay + 300, axis: 'x' }}
							>
								{experience.to}
							</div>

							{#if i === experiences.length - 1}
								<div
									class="bg-neutral-500 experience-date pl-3 w-28 h-fit whitespace-nowrap py-2 shadow-md translate-y-2"
									transition:slide={{
										delay: i * staggerDelay + staticDelay + 300 + staggerDelay,
										axis: 'x'
									}}
								>
									{experience.from}
								</div>
							{/if}
						</div>

						<div class="mx-3 flex flex-col items-center mt-2">
							<div
								transition:scale={{ delay: staticDelay + i * staggerDelay }}
								class="rounded-full bg-primary shadow-xl shadow-primary p-3"
							/>
							<div
								class="h-full w-[2px] bg-typography mt-5"
								transition:slide={{ delay: staticDelay + i * staggerDelay + 100 }}
							/>
							{#if i === experiences.length - 1}
								<div
									transition:scale={{ delay: staticDelay + i * staggerDelay + 100 + staggerDelay }}
									class="rounded-full bg-primary shadow-xl shadow-primary p-3 mt-4"
								/>
							{/if}
						</div>

						<div class="mt-1" transition:fade={{ delay: i * staggerDelay + staticDelay + 300 }}>
							<Typography type="title"
								><h5 class="font-medium font-sans text-2xl">{experience.name}</h5></Typography
							>
							<Typography type="title"
								><h6 class="font-sans text-lg">
									{experience.location} – {experience.type === 'part-time'
										? 'Part Time'
										: 'Full Time'}
								</h6></Typography
							>

							<Typography>
								<p class="mt-4 opacity-70 font-light max-w-lg mb-10">{experience.description}</p>
							</Typography>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div class="h-56" />
	{/if}
</section>

<style lang="postcss">
	.experience-date {
		clip-path: polygon(0 0, calc(100% - 1.25rem) 0, 100% 50%, calc(100% - 1.25rem) 100%, 0 100%);
	}
</style>
