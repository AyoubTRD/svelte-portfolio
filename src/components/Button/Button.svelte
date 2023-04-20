<script lang="ts">
	export let type: 'filled' | 'outlined' = 'filled';
</script>

<button
	class="rounded-lg active:!translate-y-0.5 text-lg font-semibold flex items-center justify-center py-2 px-6"
	class:filled-button={type === 'filled'}
	class:outlined-button={type === 'outlined'}
>
	<slot />
</button>

<style lang="postcss">
	.filled-button {
		@apply bg-primary border-[3px] border-primary hover:bg-primary-500 hover:border-primary-500 text-secondary;
	}

	.outlined-button {
		@apply bg-neutral bg-opacity-0 hover:bg-opacity-100 border-[3px] border-primary text-primary transition-all ease-in-out hover:translate-y-[1px];
	}
</style>
