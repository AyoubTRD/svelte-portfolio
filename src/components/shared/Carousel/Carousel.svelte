<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import type { Swiper } from 'swiper';
	import { fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	register();

	export let images: string[];
	export let aspectRatio = '1/1';

	let swiperContainer: any | undefined;
	let swiper: Swiper | undefined;
	let activeIndex = 0;
	$: {
		swiper = swiperContainer?.swiper;
	}

	function nextSlide() {
		swiper?.slideNext();
		activeIndex++;
	}

	function prevSlide() {
		swiper?.slidePrev();
		activeIndex--;
	}
</script>

{#if images.length}
	<div class="relative">
		<div class="absolute top-1/2 -translate-y-1/2 left-0 z-10">
			{#if activeIndex !== 0}
				<button
					transition:fade={{ duration: 300, easing: expoOut }}
					on:click={prevSlide}
					class="rounded-r-full bg-secondary opacity-60 text-white text-2xl py-1.5 pl-0.5 pr-3 hover:opacity-100"
					><ion-icon name="chevron-back-outline" class="translate-y-0.5" /></button
				>
			{/if}
		</div>

		<div class="absolute top-1/2 right-0 -translate-y-1/2 z-10">
			{#if activeIndex !== images.length - 1}
				<button
					transition:fade={{ duration: 300, easing: expoOut }}
					on:click={nextSlide}
					class="rounded-l-full bg-secondary opacity-60 text-white text-2xl py-1.5 pr-0.5 pl-3 hover:opacity-100"
					><ion-icon name="chevron-forward-outline" class="translate-y-0.5" /></button
				>
			{/if}
		</div>

		<swiper-container
			bind:this={swiperContainer}
			class="w-full relative aspect-square"
			style={`aspect-ratio: ${aspectRatio};`}
			autoplay="true"
		>
			{#each images as image, i}
				<swiper-slide>
					<div
						class="bg-white w-full aspect-square flex items-center justify-center"
						style={`aspect-ratio: ${aspectRatio};`}
					>
						<img class="max-w-full" src={image} alt={'Image ' + (i + 1)} />
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
{/if}
