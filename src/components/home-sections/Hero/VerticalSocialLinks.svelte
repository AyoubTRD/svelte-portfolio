<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintIn, quintInOut } from 'svelte/easing';
	import { socialLinks } from '../../../constants/socialLinks';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class="h-56 flex flex-col items-center">
	{#if animate}
		<div
			class="h-24 w-0.5 bg-primary origin-bottom"
			transition:scale={{ delay: 800, duration: 1200, easing: quintInOut }}
		/>
	{/if}

	<div class="flex-1 flex flex-col py-4 justify-between">
		{#each socialLinks as socialLink, i}
			{#if animate}
				<a
					transition:fade={{
						delay: 400 + (socialLinks.length - i - 1) * 200,
						duration: 400,
						easing: quintIn
					}}
					target="_blank"
					href={socialLink.href}
					class="text-typography hover:text-white"
				>
					<ion-icon class="text-xl" name={socialLink.iconName} />
				</a>
			{/if}
		{/each}
	</div>
</div>
