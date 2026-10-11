<script lang="ts">
    import { filesStore } from '$lib/files.svelte';

    function handleFiles(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        if (input.files) {
            filesStore.add(input.files);
            input.value = '';
        }
    }
</script>

<input id="file-input" type="file" multiple onchange={handleFiles} />

<label for="file-input">Выбрать файлы</label>

{#if filesStore.files.length > 0}
    <ul class="files-list">
        {#each filesStore.files as file (file)}
            <li class="files-list-item">
                <span>{file.name}</span>
                <button onclick={() => filesStore.remove(file)} aria-label="Удалить файл" class="files-list-item-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
            </li>
        {/each}
    </ul>
{/if}

<style>
    .files-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        padding: 0;
        margin: 0;
        width: 100%;
        gap: 4px;
    }

    .files-list-item {
        display: flex;
        width: 100%;
        align-items: center;
        align-content: center;
        flex-grow: 1;
        align-content: center;
        text-align: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-radius: 4px;
        background-color: var(--md-sys-color-surface);
        transition: background-color 0.1s ease,
            border-radius 0.1s ease;
    }

    .files-list-item:first-of-type {
        border-radius: 16px 16px 4px 4px;
    }

    .files-list-item:last-of-type {
        border-radius: 4px 4px 16px 16px;
    }

    .files-list-item:hover {
        background: color-mix(in srgb, var(--md-sys-color-surface-tint) 20%, transparent);
        border-radius: 16px;
    }

    svg {
		height: 20px;
	    fill: var(--md-sys-color-on-surface-variant);
	}

	.files-list-item-button {
    	appearance: none;
        -webkit-appearance: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        line-height: 1;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
	}
</style>
