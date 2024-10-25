let currentIndex = 0;
const images = document.querySelectorAll('.image-column');
const totalImages = images.length;
const visibleImages = 4; // Número de imagens visíveis

function updateImages() {
    images.forEach((img, index) => {
        if (index >= currentIndex && index < currentIndex + visibleImages) {
            img.style.display = 'block'; // Exibe a imagem
        } else {
            img.style.display = 'none'; // Esconde a imagem
        }
    });
}

function nextImages() {
    currentIndex += visibleImages;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reinicia o índice
    }
    updateImages();
}

function prevImages() {
    currentIndex -= visibleImages;
    if (currentIndex < 0) {
        currentIndex = Math.max(0, totalImages - visibleImages); // Limita o índice
    }
    updateImages();
}

// Inicializa o carrossel
updateImages();
