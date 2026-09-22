<script lang="ts">
	import '$lib/style/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Borus Converter</title>
	<meta name="description" content="Local file converter" />
</svelte:head>

<div class="layout">
	<Navbar />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.layout {
		display: flex;
		min-height: 100vh;
	}

	main {
		flex: 1;
		background-color: var(--md-sys-color-surface-container-lowest);
		border-radius: 20px 20px 0 0;
		padding: 16px;
		margin: 16px 16px 0 0;
	}
</style>
