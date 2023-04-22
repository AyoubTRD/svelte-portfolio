<script lang="ts">
	import HeaderPlaceholder from '../../../components/shared/Header/HeaderPlaceholder.svelte';
	import ProjectInfo from '../../../components/other/ProjectInfo/ProjectInfo.svelte';

	export let data;

	let show = false;

	setTimeout(() => {
		show = true;
	}, data.delay);
</script>

{#if show}
	<div class="flex flex-col">
		<HeaderPlaceholder />

		<div class="flex-1 container mx-auto">
			<ProjectInfo project={data.project} />
		</div>
	</div>
{/if}
