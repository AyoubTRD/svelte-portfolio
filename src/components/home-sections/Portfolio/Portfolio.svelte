<script lang="ts">
	import { inview } from 'svelte-inview';

	import BackgroundDots from '../../shared/BackgroundDots/BackgroundDots.svelte';
	import PortfolioContent from './PortfolioContent.svelte';

	let animate = false;
</script>

<section
	id="portfolio"
	class="relative"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-25%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-20 pb-28">
		{#if animate}
			<BackgroundDots position="bottom left" />

			<PortfolioContent />
		{:else}
			<div class="opacity-0">
				<PortfolioContent />
			</div>
		{/if}
	</div>
</section>
