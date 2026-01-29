<script>
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	import '../app.css';
	import Header from '../components/shared/Header/Header.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import { page } from '$app/stores';

	export const load = async () => {
		if (browser) {
			posthog.init('phc_Jzsfs46Oiqa6FB3LFvTMmztSu40Me0tJPWhP6q0AkIe', {
				api_host: 'https://us.i.posthog.com',
				defaults: '2025-05-24',
				person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
			});
		}
	};

	posthog.capture('my event', { property: 'value' });

	let reduceMotion = false;

	onMount(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => {
			reduceMotion = media.matches;
		};
		update();
		media.addEventListener?.('change', update);
		media.addListener?.(update);
		return () => {
			media.removeEventListener?.('change', update);
			media.removeListener?.(update);
		};
	});

	$: transitionDuration = reduceMotion ? 0 : 520;
	$: fadeInDuration = reduceMotion ? 0 : 640;
	$: fadeOutDuration = reduceMotion ? 0 : 400;
</script>

<Header />
{#key $page.url.pathname}
	<div
		class="page-shell"
		in:fade={{ duration: fadeInDuration }}
		out:fade={{ duration: fadeOutDuration }}
	>
		<div
			class="page-shell-inner"
			in:fly={{ y: 18, duration: transitionDuration, easing: expoOut }}
			out:fly={{ y: -12, duration: transitionDuration, easing: expoIn }}
		>
			<slot />
		</div>
	</div>
{/key}

<style lang="postcss">
	.page-shell {
		position: relative;
		isolation: isolate;
	}

	.page-shell::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: min(220px, 40vw);
		height: 2px;
		background: linear-gradient(90deg, rgba(255, 200, 106, 0.9), rgba(255, 200, 106, 0));
		transform-origin: left;
		animation: pageAccentIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
		pointer-events: none;
	}

	.page-shell-inner {
		position: relative;
	}

	@keyframes pageAccentIn {
		from {
			transform: scaleX(0);
			opacity: 0;
		}
		to {
			transform: scaleX(1);
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.page-shell::before {
			animation-duration: 0.01ms;
		}
	}
</style>
