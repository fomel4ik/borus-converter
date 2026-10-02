<script lang="ts">
	let files = $state<File[]>([]);

	function handleFiles(event: Event) {
		const input = event.currentTarget as HTMLInputElement;

		if (input.files) {
			files = [...files, ...input.files];
		}
	}

	function removeFile(fileToRemove: File) {
		files = files.filter((file) => file !== fileToRemove);
	}
</script>

<input
	id="file-input"
	type="file"
	multiple
	onchange={handleFiles}
/>

<label for="file-input">
	Выбрать файлы
</label>

{#if files.length > 0}
	<ul class="files-list">
		{#each files as file (file)}
			<li class="files-list-item">
				<span>{file.name}</span>

				<button onclick={() => removeFile(file)}>
					Удалить
				</button>
			</li>
		{/each}
	</ul>
{/if}


<style>
    input[type="file"] {
	display: none;
    }

    label {
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }
</style>
