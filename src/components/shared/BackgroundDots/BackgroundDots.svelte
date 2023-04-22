<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export let position: 'top right' | 'top left' | 'bottom right' | 'bottom left' = 'top right';

	let animate = false;

	onMount(() => {
		animate = true;
	});

	export let numberOfDots = 16;

	const staggerDelay = 50;
	const staticDelay = 200;
</script>

{#if animate}
	<div
		class="grid grid-cols-4 absolute gap-6"
		class:top-6={position === 'top right' || position === 'top left'}
		class:right-5={position == 'top right' || position === 'bottom right'}
		class:bottom-3={position === 'bottom left' || position === 'bottom right'}
		class:left-5={position === 'top left' || position === 'bottom left'}
	>
		{#each new Array(numberOfDots).fill('') as _, i}
			<div
				class="p-1 rounded-full bg-primary bg-opacity-30"
				transition:fade={{ delay: staticDelay + staggerDelay * i }}
			/>
		{/each}
	</div>
{/if}
