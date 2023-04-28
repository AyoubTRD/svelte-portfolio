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
			I am a front end web engineer who loves adding value to the team and being an important and
			reliable member who can deliver great work in a timely manner. <br /> I’m experienced in React,
			Next.JS, Angular, TailwindCSS, Node.js, GraphQL and Flutter, but most importantly I would definitely
			say I am someone who can easily adapt to different work environments and technologies.
		</p>
	</Typography>
</div>
