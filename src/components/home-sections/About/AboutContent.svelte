<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Typography from '../../shared/Typography/Typography.svelte';
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
			class="md:w-14 w-6 h-[2px] mr-4 bg-primary"
		/>
	</div>
	<Typography>
		<p class="max-w-lg" in:fade={{ duration: 300, delay: 300 }}>
			I am a future Computer Science Engineer with a passion for web development and problem
			solving. I love enhancing user experience, maximizing user interface and creating scalable and
			reliable server applications.
		</p>
	</Typography>
</div>
