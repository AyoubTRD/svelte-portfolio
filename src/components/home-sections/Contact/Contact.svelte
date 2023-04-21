<script lang="ts">
	import { inview } from 'svelte-inview';
</script>

<section id="contact" use:inview={{ unobserveOnEnter: true, rootMargin: '-35%' }} />
