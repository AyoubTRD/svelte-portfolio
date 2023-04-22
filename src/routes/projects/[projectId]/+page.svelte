<script lang="ts">
	import HeaderPlaceholder from '../../../components/shared/Header/HeaderPlaceholder.svelte';
	import ProjectInfo from '../../../components/other/ProjectInfo/ProjectInfo.svelte';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	export let data;

	let show = false;

	setTimeout(() => {
		show = true;
	}, data.delay);

	$: if (show) navLinksStore.set(defaultNavLinks);
</script>

<svelte:head>
	<title>Ayoub Taouarda – {data.project.name}</title>
</svelte:head>

{#if show}
	<div class="flex flex-col">
		<HeaderPlaceholder />

		<div class="flex-1 container mx-auto">
			<ProjectInfo project={data.project} />
		</div>
	</div>
{/if}
