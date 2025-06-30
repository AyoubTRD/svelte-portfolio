<script lang="ts">
	import { inview } from 'svelte-inview';
	import ExperienceContent from './ExperienceContent.svelte';

	let animate = false;
</script>

<section
	id="experience"
	class="relative bg-neutral"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	{#if animate}
		<ExperienceContent />
	{:else}
		<div class="opacity-0">
			<ExperienceContent />
		</div>
	{/if}
</section>