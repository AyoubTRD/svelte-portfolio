<script lang="ts">
	import { quintIn } from 'svelte/easing';
	import { socialLinks } from '../../../constants/socialLinks';
	import { fade } from 'svelte/transition';

	export let delay = 0;
</script>

<div class="flex justify-center gap-6">
	{#each socialLinks as socialLink, i}
		<a
			transition:fade={{
				delay: delay + 400 + i * 200,
				duration: 400,
				easing: quintIn
			}}
			target="_blank"
			href={socialLink.href}
			class="social-link text-typography hover:text-white"
		>
			<ion-icon class="text-2xl" name={socialLink.iconName} />
		</a>
	{/each}
</div>

<style lang="postcss">
	.social-link {
		transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		display: inline-flex;
		align-items: center;
	}

	.social-link:hover,
	.social-link:focus-visible {
		transform: translateY(-4px);
	}
</style>
