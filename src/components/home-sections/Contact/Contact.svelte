<script lang="ts">
	import { inview } from 'svelte-inview';
	import Typography from '../../shared/Typography/Typography.svelte';
	import HorizontalSocialLinks from './HorizontalSocialLinks.svelte';
	import { slide } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import ListTile from '../../shared/ListTile/ListTile.svelte';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	let animate = false;

	const staggerDelay = 200;
	const staticDelay = 100;

	function updateNavLinks() {
		navLinksStore.set(
			defaultNavLinks.map((link) => ({ ...link, active: link.label === 'Contact' }))
		);
	}
</script>

<section
	id="contact"
	class="relative"
	use:inview={{ rootMargin: '-20%' }}
	on:inview_enter={(event) => {
		animate = event.detail.inView;
		updateNavLinks();
	}}
>
	{#if animate}
		<div
			class="absolute left-0 top-0 -translate-y-1/2 flex w-full justify-between items-center top"
		>
			<div class="yellow-line" />
			<Typography type="title"
				><h2 transition:slide class="mx-10 whitespace-nowrap">Contact Me</h2></Typography
			>
			<div class="yellow-line" />
		</div>

		<div
			class="absolute left-0 bottom-0 translate-y-1/2 flex w-full justify-between items-center bottom"
		>
			<div class="yellow-line" />
			<div class="mx-10">
				<HorizontalSocialLinks delay={800} />
			</div>
			<div class="yellow-line" />
		</div>

		<div class="container mx-auto py-16">
			<div
				class="flex items-center mb-6 space-y-6 md:justify-center flex-col md:flex-row md:space-x-8 md:space-y-0 md:mb-8"
			>
				<div transition:slide={{ delay: staticDelay + staggerDelay }}>
					<ListTile iconName="mail-outline" text="trd.ayoub@outlook.com" />
				</div>
				<div transition:slide={{ delay: staticDelay + staggerDelay * 2 }}>
					<ListTile iconName="call-outline" text="+212 602-781142" />
				</div>
			</div>
			<div class="flex justify-center" transition:slide={{ delay: staticDelay + staggerDelay * 3 }}>
				<ListTile iconName="location-outline" text="Marrakech, Morocco" />
			</div>
		</div>
	{:else}
		<div class="h-36" />
	{/if}
</section>

<style lang="postcss">
	.yellow-line {
		@apply w-full bg-primary h-[2px] scale-x-0;
		animation: scaleInX 600ms ease-out forwards;
	}

	.bottom .yellow-line {
		animation-delay: 800ms;
	}

	.yellow-line:first-child {
		@apply origin-left;
	}

	.yellow-line:last-child {
		@apply origin-right;
	}

	@keyframes scaleInX {
		0% {
			transform: scaleX(0);
		}
		100% {
			transform: scaleX(1);
		}
	}
</style>
