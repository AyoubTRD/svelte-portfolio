<script lang="ts">
	import { onMount } from 'svelte';

	import BackgroundLines from './BackgroundLines.svelte';
	import Button from '../../shared/Button/Button.svelte';
	import Typography from '../../shared/Typography/Typography.svelte';
	import VerticalSocialLinks from './VerticalSocialLinks.svelte';
	import HeaderPlaceholder from '../../shared/Header/HeaderPlaceholder.svelte';
	import { fade, slide } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<section
	id="hero"
	class="h-[560px] bg-[#34353A] shadow-2xl md:h-screen flex flex-col items-center relative"
>
	<BackgroundLines />

	<HeaderPlaceholder />

	{#if animate}
		<div class="flex-1 container flex justify-between items-center">
			<div class="flex-1 h-full flex flex-col justify-between">
				<!--  This is a placeholder -->
				<div />

				<div class="-mt-16" transition:slide={{ delay: 400, duration: 800 }}>
					<h1 class="mb-2">
						<span class="font-sans-2 text-3xl md:text-5xl mr-3">I'M</span>
						<Typography inline type="title"
							><span class="text-primary text-5xl md:text-7xl">Ayoub Taouarda</span></Typography
						>
					</h1>

					<div class="mb-8">
						<Typography
							><span class="text-lg md:text-2xl"
								>I build AI web applications with React & Angular
							</span></Typography
						>
					</div>

					<a href="/#contact">
						<Button type="outlined">Contact Me</Button>
					</a>
				</div>

				<div class="pb-4" out:fade={{ duration: 300 }} in:fade={{ delay: 2800, duration: 600 }}>
					<a class="hidden md:block p-4" href="#about">
						<ion-icon class="text-4xl animate-bounce" name="chevron-down-outline" />
					</a>
				</div>
			</div>

			<div class="h-full relative">
				<!-- <img
					transition:fade={{ delay: 450, duration: 800 }}
					class="absolute top-1/3 -translate-y-1/2 right-0 filter grayscale h-96 w-96 max-w-none hidden lg:block object-cover"
					src="/me/me 2.png"
					alt="Ayoub Taouarda's photo"
				/> -->
				<div class="h-full flex items-end justify-end">
					<VerticalSocialLinks />
				</div>
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	/* @keyframes animateHeroContent {
		0% {
			opacity: 0.3;
			transform: translateX(-2.5rem);
			clip-path: inset(0 100% 0 0);
		}

		100% {
			transform: translateX(0);
			opacity: 1;
			clip-path: inset(0);
		}
	}

	.hero-content {
		animation: animateHeroContent 700ms ease-out;
	} */
</style>
