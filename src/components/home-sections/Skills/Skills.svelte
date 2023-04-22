<script lang="ts">
	import { inview } from 'svelte-inview';
	import SkillsContent from './SkillsContent.svelte';

	let animate = false;
</script>

<section
	id="skills"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
	on:inview_enter={(event) => (animate = event.detail.inView)}
>
	<div class="container mx-auto py-20">
		{#if animate}
			<SkillsContent />
		{:else}
			<div class="opacity-0">
				<SkillsContent />
			</div>
		{/if}
	</div>
</section>
