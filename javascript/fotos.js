let currentImageIndex;
let images;
let touchStartX = 0; // Ponto inicial do toque no eixo X
let touchEndX = 0;   // Ponto final do toque no eixo X

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }

    var imageModal = document.getElementById('imageModal');
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}

// Mostra o modal com a imagem
function showImageModal(imageElement, index) {
    images = imageElement.parentElement.getElementsByTagName('img');
    currentImageIndex = index;
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('imageModalContent');
    modal.style.display = "block";
    modalImg.src = images[currentImageIndex].src;

    // Adiciona o event listener para detectar as setas do teclado
    document.addEventListener('keydown', handleKeyPress);

    // Adiciona os event listeners para detectar o swipe na tela (touch events)
    modalImg.addEventListener('touchstart', handleTouchStart, false);
    modalImg.addEventListener('touchend', handleTouchEnd, false);
}

// Fecha o modal de imagem e remove o event listener
function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
    
    // Remove o event listener quando o modal é fechado
    document.removeEventListener('keydown', handleKeyPress);

    // Remove os event listeners de touch quando o modal é fechado
    var modalImg = document.getElementById('imageModalContent');
    modalImg.removeEventListener('touchstart', handleTouchStart, false);
    modalImg.removeEventListener('touchend', handleTouchEnd, false);
}

// Muda a imagem ao clicar nas setas ou pressionar as teclas do teclado
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    var modalImg = document.getElementById('imageModalContent');
    modalImg.src = images[currentImageIndex].src;
}

// Detecta as teclas pressionadas no teclado
function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1); // Seta esquerda, retrocede a imagem
    } else if (event.key === 'ArrowRight') {
        changeImage(1); // Seta direita, avança a imagem
    }
}

// Inicia o evento de toque
function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

// Termina o evento de toque e determina se foi um swipe
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe(); // Verifica se foi um swipe e em qual direção
}

// Verifica a direção do swipe
function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe para a esquerda (próxima imagem)
        changeImage(1);
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe para a direita (imagem anterior)
        changeImage(-1);
    }
}
