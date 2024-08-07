function autoResize(textarea) {
    textarea.style.height = 'auto'; // Redefine a altura para auto
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajusta a altura conforme o conteúdo
}