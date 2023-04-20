<script>
	import { onMount } from 'svelte';
	import { fade, scale, slide } from 'svelte/transition';
	import { quintInOut, quintIn } from 'svelte/easing';

	import BackgroundLines from '../BackgroundLines/BackgroundLines.svelte';
	import Button from '../Button/Button.svelte';
	import Typography from '../Typography/Typography.svelte';

	let animate = false;

	const socialLinks = [
		{
			iconName: 'logo-linkedin',
			href: 'https://www.linkedin.com/in/ayoub-taouarda/'
		},
		{
			iconName: 'logo-github',
			href: 'https://github.com/ayoubtrd'
		},
		{
			iconName: 'logo-whatsapp',
			href: 'https://api.whatsapp.com/send?phone=212602781142'
		}
	];

	onMount(() => {
		animate = true;
	});
</script>

<section id="hero" class="h-screen flex flex-col items-center relative">
	<BackgroundLines />

	<!-- Header placeholder -->
	<div class="h-24" />

	<div class="flex-1 container flex justify-between items-center">
		<div class="hero-content">
			<h1 class="mb-4">
				<span class="font-sans-2 text-3xl mr-3">I'M</span>
				<Typography inline type="title"><span class="text-primary">Ayoub Taouarda</span></Typography
				>
			</h1>

			<div class="mb-6">
				<Typography><span class="text-xl">React & Angular Web Developer</span></Typography>
			</div>

			<Button type="outlined">Contact Me</Button>
		</div>

		<div class="h-full flex items-end justify-end">
			<div class="h-56 flex flex-col items-center">
				{#if animate}
					<div
						class="h-24 w-0.5 bg-primary origin-bottom"
						transition:scale={{ delay: 1200, duration: 2000, easing: quintInOut }}
					/>
				{/if}

				<div class="flex-1 flex flex-col py-4 justify-between">
					{#each socialLinks as socialLink, i}
						{#if animate}
							<a
								transition:fade={{
									delay: 700 + (socialLinks.length - i - 1) * 300,
									duration: 600,
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
		</div>
	</div>
</section>

<style lang="postcss">
	@keyframes animateHeroContent {
		0% {
			opacity: 0.3;
			transform: translateX(-2.5rem);
			clip-path: inset(0 100% 0 0);
		}

		100% {
			transform: translateX(0);
			opacity: 1;
			clip-path: inset(0);
		}
	}

	.hero-content {
		animation: animateHeroContent 1300ms ease-out;
	}
</style>
