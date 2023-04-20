<script lang="ts">
	export let type: 'filled' | 'outlined' = 'filled';
</script>

<button
	class="rounded-lg text-lg font-semibold flex items-center justify-center py-2 px-6"
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
		@apply bg-transparent border-[3px] border-primary text-primary transition-all ease-in-out hover:translate-y-0.5;
	}
</style>
