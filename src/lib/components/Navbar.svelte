<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav>
	<a href={resolve('/')}>Converter</a>
	<a href={resolve('/settings')}>Settings</a>
	<a href={resolve('/about')}>About</a>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 96px;
		background-color: var(--md-sys-color-surface);
		color: var(--md-sys-color-on-surface-variant);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>