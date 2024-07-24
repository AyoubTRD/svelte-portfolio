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
		<p class="mb-2 md:text-lg">
			I am a passionate full stack engineer with expertise spanning React and Angular in the
			frontend and mainly NodeJS in the backend. I thrive in dynamic and diverse environments with
			my quick adaptability to new challenges and consistently delivering high-quality work.
		</p>
		<p class="md:text-lg">
			With my experience leading a team on large-scale projects, I am committed to enhancing team
			efficiency and bringing innovative solutions to the table.
		</p>

		<a href="/me/Ayoub_Taouarda.pdf" target="_blank" class="block mt-4">
			<Button type="outlined">Resume</Button>
		</a>
	</div>
</div>
