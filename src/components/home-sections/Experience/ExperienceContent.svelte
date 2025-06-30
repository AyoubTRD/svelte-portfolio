<script>
	import { fade, scale, slide } from 'svelte/transition';
	import Typography from '../../shared/Typography/Typography.svelte';
	import { experiences } from '../../../constants/experiences';

	const staggerDelay = 500;
	const staticDelay = 400;
</script>

<div in:slide class="container mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<Typography type="title"><h2 class="text-primary">Experience</h2></Typography>
</div>

<div class="container mx-auto py-28">
	<div class="space-y-4">
		{#each experiences as experience, i}
			<div class="flex md:ml-14">
				<div class="flex justify-between flex-col">
					<div
						class="experience-date"
						in:slide={{ delay: i * staggerDelay + staticDelay + 300, axis: 'x' }}
					>
						{experience.to}
					</div>

					{#if i === experiences.length - 1}
						<div
							class="experience-date translate-y-2"
							in:slide={{
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
						in:scale={{ delay: staticDelay + i * staggerDelay }}
						class="rounded-full bg-primary shadow-xl shadow-primary p-3"
					/>
					<div
						class="h-full w-[2px] bg-typography mt-5"
						in:slide={{ delay: staticDelay + i * staggerDelay + 100 }}
					/>
					{#if i === experiences.length - 1}
						<div
							in:scale={{ delay: staticDelay + i * staggerDelay + 100 + staggerDelay }}
							class="rounded-full bg-primary shadow-xl shadow-primary p-3 mt-4"
						/>
					{/if}
				</div>

				<div class="mt-1" in:fade={{ delay: i * staggerDelay + staticDelay + 300 }}>
					<Typography type="title"
						><h5 class="font-medium font-sans text-2xl">{experience.name}</h5></Typography
					>
					<Typography type="title"
						><h6 class="font-sans text-lg">
							{experience.location} – {experience.type}
						</h6></Typography
					>

					<Typography>
						<div>
							<p class="mt-4 opacity-70 font-light max-w-lg !mb-6">
								{@html experience.description}
							</p>
						</div>
					</Typography>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.experience-date {
		@apply bg-neutral-500 pl-3 w-24 text-sm md:text-base md:w-28 h-fit whitespace-nowrap py-2 shadow-md;
		clip-path: polygon(0 0, calc(100% - 1.25rem) 0, 100% 50%, calc(100% - 1.25rem) 100%, 0 100%);
	}
</style>