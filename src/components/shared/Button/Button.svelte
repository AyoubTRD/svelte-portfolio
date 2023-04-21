<script lang="ts">
	export let type: 'filled' | 'outlined' = 'filled';
	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<button
	class="rounded-lg active:!translate-y-0.5 font-semibold flex items-center justify-center"
	class:filled-button={type === 'filled'}
	class:outlined-button={type === 'outlined'}
	class:sm-button={size === 'sm'}
	class:md-button={size === 'md'}
	class:lg-button={size === 'lg'}
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

	.lg-button {
		@apply text-lg py-2 px-6;
	}

	.md-button {
		@apply text-base py-1 px-4;
	}

	.sm-button {
		@apply text-sm py-1 px-3;
	}
</style>
