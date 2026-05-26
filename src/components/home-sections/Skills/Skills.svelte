<script lang="ts">
	import { inview } from 'svelte-inview';
	import SkillsContent from './SkillsContent.svelte';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	let animate = false;

	function updateNavLinks() {
		navLinksStore.set(
			defaultNavLinks.map((link) => ({ ...link, active: link.label === 'Technical Arsenal' }))
		);
	}
</script>

<section
	id="skills"
	use:inview={{ rootMargin: '-40%' }}
	on:inview_enter={(event) => {
		animate = event.detail.inView;
		updateNavLinks();
	}}
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
