<script>
	import { onMount } from 'svelte';
	import { rotate } from '../../../transitions/rotate';
	import { quintInOut, quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class="pointer-events-none">
	{#each ['', '', '', '', '', '', '', ''] as _, i}
		{#if animate}
			<div transition:fade={{ delay: 1000, duration: 1400 }}>
				<div
					class="absolute top-0 right-0 origin-left rotate-[39deg]"
					transition:rotate={{ delay: 1000, from: 30, to: 39, duration: 1000, easing: quintOut }}
				>
					<div
						class="scale-x-[2] h-[2px] bg-typography bg-opacity-10"
						style="width: {i * 6 + 'rem'};"
					/>
				</div>
			</div>
		{/if}
	{/each}

	{#each ['', '', '', '', '', '', '', ''] as _, i}
		{#if animate}
			<div transition:fade={{ delay: 1000, duration: 1400 }}>
				<div
					class="absolute top-0 right-0 origin-left rotate-[40deg]"
					transition:rotate={{ delay: 1000, from: 30, to: 40, duration: 1000, easing: quintOut }}
				>
					<div
						class="scale-x-[2] h-[2px] bg-typography bg-opacity-20"
						style="width: {i * 6 + 'rem'};"
					/>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="postcss">
</style>
