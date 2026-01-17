<script lang="ts">
	import '$lib/app.css';
	import Navigation from '$lib/components/ui/Navigation.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://padelusa.com" />
	<link rel="dns-prefetch" href="https://amazon.com" />
</svelte:head>

<div data-theme="padel" class="min-h-screen flex flex-col">
	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
