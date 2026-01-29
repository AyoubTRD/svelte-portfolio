<script lang="ts">
	import { inview } from 'svelte-inview';

	import Typography from '../../shared/Typography/Typography.svelte';
	import { slide, fade } from 'svelte/transition';
	import BackgroundDots from '../../shared/BackgroundDots/BackgroundDots.svelte';
	import AboutContent from './AboutContent.svelte';
	import { setContext } from 'svelte';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	let animate = false;

	function updateNavLinks() {
		navLinksStore.set(defaultNavLinks.map((link) => ({ ...link, active: link.label === 'About' })));
	}

	function onViewEnter(event: CustomEvent<ObserverEventDetails>) {
		animate = event.detail.inView;

		updateNavLinks();
	}
</script>

<section
	id="about"
	class="relative"
	use:inview={{ rootMargin: '-20%', unobserveOnEnter: true }}
	on:inview_enter={onViewEnter}
>
	<div class="container mx-auto pt-24 pb-16">
		{#if animate}
			<BackgroundDots />
			<AboutContent />
		{:else}
			<div class="opacity-0">
				<AboutContent />
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
</style>
