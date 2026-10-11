class FilesStore {
    files = $state<File[]>([]);

    add(newFiles: FileList | File[]) {
        this.files = [...this.files, ...Array.from(newFiles)];
    }

    remove(fileToRemove: File) {
        this.files = this.files.filter((f) => f !== fileToRemove);
    }

    clear() {
        this.files = [];
    }
}

export const filesStore = new FilesStore();
