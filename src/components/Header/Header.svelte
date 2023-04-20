<script>
	import Typography from '../Typography/Typography.svelte';

	let navLinks = [
		{
			label: 'About',
			href: '#about',
			active: true
		},
		{
			label: 'Portfolio',
			href: '#portfolio'
		},
		{
			label: 'Contact',
			href: '#contact'
		}
	];
</script>

<header class="fixed z-10 top-0 left-0 w-full h-24 backdrop-blur">
	<div class="container mx-auto flex items-center justify-between h-full">
		<a href="/">
			<Typography type="title">
				<h1 class=" font-bold">T</h1>
			</Typography>
		</a>

		<nav class="flex space-x-6 font-sans-2 font-medium">
			{#each navLinks as navLink}
				<a
					class:text-opacity-100={navLink.active}
					class:text-opacity-60={!navLink.active}
					class="text-typography active:text-opacity-100 transition-all hover:text-opacity-100"
					href={navLink.href}>{navLink.label}</a
				>
			{/each}
		</nav>
	</div>
</header>
