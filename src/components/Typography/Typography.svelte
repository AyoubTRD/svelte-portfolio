<script lang="ts">
	export let type: 'body' | 'title' = 'body';
	export let inline: boolean = false;
</script>

<div class:inline class:title-text={type === 'title'} class:body-text={type === 'body'}>
	<slot />
</div>

<style lang="postcss">
	.title-text {
		@apply font-serif text-5xl;
	}

	.body-text {
		@apply font-sans text-base;
	}
</style>
