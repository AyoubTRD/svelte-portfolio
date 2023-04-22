<script lang="ts">
	import { quintIn } from 'svelte/easing';
	import { socialLinks } from '../../../constants/socialLinks';
	import { fade } from 'svelte/transition';

	export let delay = 0;
</script>

<div class="flex justify-between space-x-4">
	{#each socialLinks as socialLink, i}
		<a
			transition:fade={{
				delay: delay + 400 + i * 200,
				duration: 400,
				easing: quintIn
			}}
			target="_blank"
			href={socialLink.href}
			class="text-typography hover:text-white"
		>
			<ion-icon class="text-2xl" name={socialLink.iconName} />
		</a>
	{/each}
</div>
