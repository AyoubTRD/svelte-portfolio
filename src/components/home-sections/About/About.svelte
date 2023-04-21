<script lang="ts">
	import { inview } from 'svelte-inview';

	import Typography from '../../shared/Typography/Typography.svelte';
	import { slide, fade } from 'svelte/transition';

	let animate = false;
</script>

<section
	id="about"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-20">
		{#if animate}
			<div transition:fade={{ duration: 400 }}>
				<Typography type="title"
					><h2 transition:slide={{ axis: 'y', duration: 500 }} class="section-title">
						About Me
					</h2></Typography
				>
			</div>

			<div class="flex">
				<div class="flex items-center h-6">
					<div
						transition:slide={{ delay: 300, duration: 800, axis: 'x' }}
						class="md:w-14 w-6 h-[2px] mr-4 bg-primary"
					/>
				</div>
				<Typography>
					<p class="max-w-lg" transition:fade={{ duration: 300, delay: 300 }}>
						I am a future Computer Science Engineer with a passion for web development and problem
						solving. I love enhancing user experience, maximizing user interface and creating
						scalable and reliable server applications.
					</p>
				</Typography>
			</div>
		{:else}
			<div class="h-56" />
		{/if}
	</div>
</section>

<style lang="postcss">
</style>
