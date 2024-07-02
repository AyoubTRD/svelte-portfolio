<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let dialog: HTMLDialogElement | undefined;
	export let showModal = false;

	$: if (dialog && showModal) dialog.showModal();

	const dispatch = createEventDispatcher();

	function close() {
		showModal = false;
		dialog?.close();

		dialog = undefined;
		dispatch('close');
	}
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<dialog
		class="fixed h-screen w-full top-5 left-5 m-0 z-50 flex items-center bg-transparent justify-center backdrop-blur-sm"
		bind:this={dialog}
		on:close={close}
		on:click|self={close}
		transition:fade
	>
		<div transition:slide>
			<slot />
		</div>
	</dialog>
{/if}
