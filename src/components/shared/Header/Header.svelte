<script lang="ts">
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import { navLinksStore } from '../../../stores/navLinksStore';
	import { page } from '$app/stores';

	let isHomePage = true;
	let animate = false;

	$: {
		if ($page.url.pathname === '/') {
			isHomePage = true;
		} else {
			isHomePage = false;
		}
	}

	onMount(() => {
		animate = true;
	});
</script>

<header class="fixed z-40 top-0 left-0 w-full h-24 backdrop-blur-sm">
	<div class="container mx-auto flex items-center justify-between h-full">
		{#if animate}
			<a href="/" transition:fade>
				<!-- <Typography type="title">
					<h6 class="font-bold tracking-tighter">AT</h6>
				</Typography> -->
				<img
					src="/me/logo-yellow.png"
					alt="AT logo"
					class="md:w-[4.5rem] md:h-[4.5rem] w-14 h-14 -translate-x-2"
				/>
			</a>

			{#if isHomePage}
				<nav class="flex space-x-6 font-sans-2 font-medium">
					{#each $navLinksStore as navLink, i}
						<a
							transition:slide={{ duration: 600, delay: i * 200 }}
							class:text-opacity-100={navLink.active}
							class:text-opacity-60={!navLink.active}
							class="text-typography active:text-opacity-100 transition-all hover:text-opacity-100"
							href={navLink.href}>{navLink.label}</a
						>
					{/each}
				</nav>
			{/if}
		{/if}
	</div>
</header>
