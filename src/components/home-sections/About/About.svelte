<script lang="ts">
	import { inview } from 'svelte-inview';

	import Typography from '../../shared/Typography/Typography.svelte';
	import { slide, fade } from 'svelte/transition';
	import BackgroundDots from '../../shared/BackgroundDots/BackgroundDots.svelte';
	import AboutContent from './AboutContent.svelte';

	let animate = false;
</script>

<section
	id="about"
	class="relative"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-20">
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
