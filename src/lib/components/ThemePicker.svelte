<script lang="ts">
	import { browser } from '$app/environment';

	type Theme = 'system' | 'light' | 'dark';

	let theme = $state<Theme>('system'); // хранит в себе тему, по умолчанию system

	$effect(() => { // проверка есть ли тема в localStorage
		if (!browser) return;

		const savedTheme = localStorage.getItem('theme');

		if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
			theme = savedTheme;
		}
	});

	$effect(() => {
		if (!browser) return;

		if (theme === 'system') {
			document.documentElement.removeAttribute('data-theme');
		} else {
			document.documentElement.dataset.theme = theme;
		}

		localStorage.setItem('theme', theme);
	});
</script>

<fieldset>
    <label class="theme-button">
        <input type="radio" bind:group={theme} value="system" />
        <span>System</span>
    </label>
    <label class="theme-button">
        <input type="radio" bind:group={theme} value="light" />
        <span>Light</span>
    </label>
    <label class="theme-button">
        <input type="radio" bind:group={theme} value="dark" />
        <span>Dark</span>
    </label>
</fieldset>

<style>

</style>