<script lang="ts">
	import { onMount } from 'svelte';
	import Typography from '../Typography/Typography.svelte';
	import { slide, fade } from 'svelte/transition';

	let navLinks = [
		{
			label: 'About',
			href: '/#about',
			active: true
		},
		{
			label: 'Portfolio',
			href: '/#portfolio'
		},
		{
			label: 'Contact',
			href: '/#contact'
		}
	];

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<header class="fixed z-40 top-0 left-0 w-full h-24 backdrop-blur-lg">
	<div class="container mx-auto flex items-center justify-between h-full">
		{#if animate}
			<a href="/" transition:fade>
				<Typography type="title">
					<h6 class="font-bold">T</h6>
				</Typography>
			</a>

			<nav class="flex space-x-6 font-sans-2 font-medium">
				{#each navLinks as navLink, i}
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
	</div>
</header>
