<script lang="ts">
	import Typography from '../../shared/Typography/Typography.svelte';

	export let label: string;
	export let image: string;
</script>

<div
	class="bg-neutral hover:bg-neutral-500 transition-all w-full h-full py-12 rounded-2xl shadow-md flex flex-col justify-between items-center"
>
	<img class="max-w-12 max-h-12" src={image} alt={label + ' image'} />

	<Typography>
		<p class="font-sans-2 mt-10">{label}</p>
	</Typography>
</div>
