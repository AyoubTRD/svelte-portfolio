<script lang="ts">
	import { inview } from 'svelte-inview';

	import BackgroundDots from '../../shared/BackgroundDots/BackgroundDots.svelte';
	import PortfolioContent from './PortfolioContent.svelte';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	let animate = false;

	function updateNavLinks() {
		navLinksStore.set(
			defaultNavLinks.map((link) => ({ ...link, active: link.label === 'Portfolio' }))
		);
	}
</script>

<section
	id="portfolio"
	class="relative"
	use:inview={{ rootMargin: '-25%', unobserveOnEnter: true }}
	on:inview_enter={(event) => {
		animate = event.detail.inView;
		updateNavLinks();
	}}
>
	<div class="container mx-auto py-24 pb-28">
		{#if animate}
			<BackgroundDots position="bottom left" dotsColor="white" />

			<PortfolioContent disableImages={false} />
		{:else}
			<div class="opacity-0">
				<PortfolioContent disableImages={true} />
			</div>
		{/if}
	</div>
</section>
