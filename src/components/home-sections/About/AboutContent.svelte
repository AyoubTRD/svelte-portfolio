<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Typography from '../../shared/Typography/Typography.svelte';
	import Button from '../../shared/Button/Button.svelte';
</script>

<div in:fade={{ duration: 400 }}>
	<Typography type="title"
		><h2 in:slide={{ axis: 'y', duration: 500 }} class="section-title">About Me</h2></Typography
	>
</div>

<div class="flex">
	<div class="flex items-center h-6">
		<div
			in:slide={{ delay: 300, duration: 800, axis: 'x' }}
			class="md:w-14 w-6 h-[2px] mr-4 bg-primary hidden md:block"
		/>
	</div>
	<div class="max-w-3xl" in:fade={{ duration: 300, delay: 300 }}>
		<p class="md:text-lg">
			With my passion and 3+ years of experience in web development with React, Angular and NodeJS,
			I aim to reach my full potential by continuously learning and tackling new challenges while
			adding value and contributing to project sull potential by continuously learning and tackling
			new challenges while adding value and contributing to project success.
		</p>

		<a href="/me/Ayoub_Taouarda.pdf" target="_blank" class="block mt-4">
			<Button type="outlined">Resume</Button>
		</a>
	</div>
</div>
