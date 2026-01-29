<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintIn, quintInOut, backOut } from 'svelte/easing';
	import { socialLinks } from '../../../constants/socialLinks';

	let animate = false;
	let hoveredIndex: number | null = null;

	onMount(() => {
		animate = true;
	});
</script>

<div class="h-56 flex flex-col items-center social-links-container">
	{#if animate}
		<div
			class="h-24 w-0.5 bg-primary origin-bottom connector-line"
			transition:scale={{ delay: 800, duration: 1200, easing: quintInOut }}
		/>
	{/if}

	<div class="flex-1 flex flex-col py-4 justify-between items-center">
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
					class="social-link"
					on:mouseenter={() => (hoveredIndex = i)}
					on:mouseleave={() => (hoveredIndex = null)}
					aria-label={socialLink.href}
				>
					<div class="social-icon-wrapper" class:is-hovered={hoveredIndex === i}>
						<div class="social-icon-bg" />
						<ion-icon class="text-xl relative z-10" name={socialLink.iconName} />
					</div>
				</a>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
	.social-links-container {
		position: relative;
	}

	.connector-line {
		position: relative;
		box-shadow: 0 0 10px rgba(255, 200, 106, 0.3);
		animation: linePulse 3s ease-in-out infinite;
	}

	@keyframes linePulse {
		0%,
		100% {
			box-shadow: 0 0 10px rgba(255, 200, 106, 0.3);
		}
		50% {
			box-shadow: 0 0 20px rgba(255, 200, 106, 0.5);
		}
	}

	.social-link {
		position: relative;
		display: block;
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.social-link:hover {
		transform: scale(1.2) translateX(-4px);
	}

	.social-icon-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		color: #e4e4e5;
		transition: color 0.3s ease;
	}

	.social-icon-wrapper:hover {
		color: #ffffff;
	}

	.social-icon-bg {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, rgba(255, 200, 106, 0.1) 0%, transparent 70%);
		border-radius: 50%;
		opacity: 0;
		transform: scale(0);
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.social-icon-wrapper.is-hovered .social-icon-bg {
		opacity: 1;
		transform: scale(1);
	}

	.social-icon-wrapper.is-hovered {
		animation: iconFloat 0.6s ease-out;
	}

	@keyframes iconFloat {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
		100% {
			transform: translateY(0);
		}
	}

	/* Add glow effect on hover */
	.social-link:hover ion-icon {
		filter: drop-shadow(0 0 8px rgba(255, 200, 106, 0.6));
	}
</style>
