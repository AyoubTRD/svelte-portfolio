<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import type { Swiper } from 'swiper';

	register();

	export let images: string[];

	function nextSlide() {
		const swiper: Swiper = (document.querySelector('swiper-container') as any).swiper;

		swiper.slideNext();
	}

	function prevSlide() {
		const swiper: Swiper = (document.querySelector('swiper-container') as any).swiper;

		swiper.slideNext();
	}
</script>

<swiper-container class="w-full" loop="true" autoplay>
	{#each images as image}
		<swiper-slide><img class="max-w-full" src={image} alt="" /></swiper-slide>
	{/each}
</swiper-container>
