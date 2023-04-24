<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import type { Swiper } from 'swiper';
	import { fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	register();

	export let images: string[];

	let swiperContainer: any | undefined;
	let swiper: Swiper | undefined;
	let activeIndex = 0;
	$: {
		swiper = swiperContainer?.swiper;
		activeIndex = swiper?.activeIndex || 0;
	}

	function nextSlide() {
		swiper?.slideNext();
	}

	function prevSlide() {
		swiper?.slidePrev();
	}
</script>

{#if images.length}
	<div class="relative">
		<div class="absolute top-1/2 -translate-y-1/2 left-0 z-10">
			{#if activeIndex !== 0}
				<button
					transition:fade={{ duration: 300, easing: expoOut }}
					on:click={prevSlide}
					class="rounded-r-full bg-secondary opacity-60 text-white text-4xl py-2 pl-0.5 pr-3 hover:opacity-100"
					><ion-icon name="chevron-back-outline" class="translate-y-0.5" /></button
				>
			{/if}
		</div>

		<div class="absolute top-1/2 right-0 -translate-y-1/2 z-10">
			{#if activeIndex !== images.length - 1}
				<button
					transition:fade={{ duration: 300, easing: expoOut }}
					on:click={nextSlide}
					class="rounded-l-full bg-secondary opacity-60 text-white text-4xl py-2 pr-0.5 pl-3 hover:opacity-100"
					><ion-icon name="chevron-forward-outline" class="translate-y-0.5" /></button
				>
			{/if}
		</div>

		<swiper-container
			bind:this={swiperContainer}
			on:slidechange={(swiper) => (activeIndex = swiper.activeIndex)}
			class="w-full relative aspect-square"
			autoplay="true"
		>
			{#each images as image, i}
				<swiper-slide>
					<div class="bg-white w-full aspect-square flex items-center justify-center">
						<img class="max-w-full" src={image} alt={'Image ' + (i + 1)} />
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
{/if}
