<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Ayoub Taouarda – Updates Soon</title>
	<meta
		name="description"
		content="Ayoub Taouarda's portfolio is currently being updated and will be available soon."
	/>
</svelte:head>

<main class="maintenance-page" aria-labelledby="maintenance-title">
	<section class="maintenance-card">
		<h1 id="maintenance-title">Updates are being made.</h1>
		<p class="message">The portfolio will be available again soon.</p>
	</section>
</main>

<style lang="postcss">
	.maintenance-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background:
			radial-gradient(circle at top left, rgba(255, 200, 106, 0.18), transparent 32rem),
			#111111;
		color: #f8f5ed;
		font-family: Cabin, system-ui, sans-serif;
		text-align: center;
	}

	.maintenance-card {
		max-width: 42rem;
		padding: clamp(2rem, 6vw, 4rem);
		border: 1px solid rgba(255, 200, 106, 0.22);
		border-radius: 1.5rem;
		background: rgba(18, 18, 18, 0.76);
		box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.28);
	}

	h1 {
		margin: 0;
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 400;
		line-height: 0.95;
	}

	.message {
		margin: 1.25rem 0 0;
		color: rgba(248, 245, 237, 0.74);
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 1.7;
	}
</style>
