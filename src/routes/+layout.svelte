<script>
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	import '../app.css';
	import Header from '../components/shared/Header/Header.svelte';
	import { onMount } from 'svelte';

	export const load = async () => {
		if (browser) {
			posthog.init('phc_Jzsfs46Oiqa6FB3LFvTMmztSu40Me0tJPWhP6q0AkIe', {
				api_host: 'https://us.i.posthog.com',
				defaults: '2025-05-24',
				person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
			});
		}
	};

	posthog.capture('my event', { property: 'value' });
</script>

<Header />
<slot />
