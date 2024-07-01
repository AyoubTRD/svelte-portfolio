<script lang="ts">
	export let iconName: string;
	export let text: string;
</script>

<div class="rounded-md bg-neutral w-72 pr-3 pl-7 py-4 flex items-center shadow-sm">
	<ion-icon name={iconName} class="text-primary text-2xl" />
	<p class="ml-4">{text}</p>
</div>
