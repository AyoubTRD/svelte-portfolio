<script>
	import { onMount } from 'svelte';
	import { rotate } from '../../../transitions/rotate';
	import { quintOut, expoOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
	});

	// Generate more dynamic line configurations
	const primaryLines = Array.from({ length: 12 }, (_, i) => ({
		angle: 38 + i * 0.3,
		width: i * 7,
		opacity: 0.08 + i * 0.01,
		thickness: i % 3 === 0 ? 3 : 2,
		delay: 800 + i * 80,
		glow: i % 4 === 0
	}));

	const accentLines = Array.from({ length: 6 }, (_, i) => ({
		angle: 41 + i * 0.5,
		width: i * 8,
		opacity: 0.15,
		thickness: 1,
		delay: 1200 + i * 100,
		color: 'primary'
	}));
</script>

<div class="pointer-events-none absolute inset-0 overflow-hidden">
	<!-- Diagonal grid system -->
	{#each primaryLines as line, i}
		{#if animate}
			<div in:fade={{ delay: line.delay, duration: 1600 }} out:fade={{ duration: 300 }}>
				<div
					class="absolute top-0 right-0 origin-left line-base"
					class:line-glow={line.glow}
					in:rotate={{
						delay: line.delay,
						from: 30,
						to: line.angle,
						duration: 1400,
						easing: expoOut
					}}
					style="--line-angle: {line.angle}deg;"
				>
					<div
						class="scale-x-[2.5] bg-typography transition-all duration-700"
						style="width: {line.width}rem; height: {line.thickness}px; opacity: {line.opacity};"
					/>
				</div>
			</div>
		{/if}
	{/each}

	<!-- Accent lines with primary color -->
	{#each accentLines as line, i}
		{#if animate}
			<div in:fade={{ delay: line.delay, duration: 1200 }} out:fade={{ duration: 300 }}>
				<div
					class="absolute top-0 right-0 origin-left accent-line"
					in:rotate={{
						delay: line.delay,
						from: 25,
						to: line.angle,
						duration: 1600,
						easing: expoOut
					}}
					style="--line-angle: {line.angle}deg;"
				>
					<div
						class="scale-x-[2.5] bg-primary transition-all duration-700"
						style="width: {line.width}rem; height: {line.thickness}px; opacity: {line.opacity};"
					/>
				</div>
			</div>
		{/if}
	{/each}

	<!-- Animated gradient meshes in corners -->
	{#if animate}
		<div class="mesh-gradient mesh-top-right" in:fade={{ delay: 1500, duration: 2000 }} />
		<div class="mesh-gradient mesh-bottom-left" in:fade={{ delay: 1800, duration: 2000 }} />
	{/if}
</div>

<style lang="postcss">
	.line-base {
		transform-origin: top left;
	}

	.line-glow {
		filter: drop-shadow(0 0 8px rgba(255, 200, 106, 0.2));
	}

	.accent-line {
		animation: accentPulse 6s ease-in-out infinite;
		transform-origin: top left;
	}

	@keyframes accentPulse {
		0%,
		100% {
			opacity: 1;
			filter: drop-shadow(0 0 4px rgba(255, 200, 106, 0.3));
		}
		50% {
			opacity: 0.7;
			filter: drop-shadow(0 0 12px rgba(255, 200, 106, 0.5));
		}
	}

	/* Mesh gradients for depth */
	.mesh-gradient {
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.05;
		pointer-events: none;
	}

	.mesh-top-right {
		top: -200px;
		right: -200px;
		background: radial-gradient(circle, rgba(255, 200, 106, 0.4) 0%, transparent 70%);
		animation: meshFloat 20s ease-in-out infinite;
	}

	.mesh-bottom-left {
		bottom: -150px;
		left: -150px;
		background: radial-gradient(circle, rgba(237, 149, 0, 0.3) 0%, transparent 70%);
		animation: meshFloat 25s ease-in-out infinite reverse;
	}

	@keyframes meshFloat {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -40px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 30px) scale(0.95);
		}
	}

	@media (max-width: 768px) {
		.mesh-gradient {
			width: 400px;
			height: 400px;
		}
	}
</style>
