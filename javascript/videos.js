// Função para garantir que apenas um vídeo esteja tocando de cada vez
function pauseOtherVideos(currentVideo) {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        if (iframe !== currentVideo) {
            const src = iframe.src;
            iframe.src = ''; // Pausar o vídeo
            iframe.src = src; // Reiniciar o vídeo em estado pausado
        }
    });
}

// Modificar a função toggleCommentModal para pausar e reproduzir vídeos conforme necessário
function toggleCommentModal(modalId) {
    // Fechar todos os modais abertos e pausar o vídeo dentro do modal
    const modals = document.querySelectorAll('.comment-modal');
    modals.forEach(modal => {
        const videoInsideModal = modal.querySelector('iframe');
        if (modal.id !== modalId) {
            modal.style.display = 'none';  // Fecha todos os modais que não sejam o atual
            if (videoInsideModal) {
                const src = videoInsideModal.src;
                videoInsideModal.src = ''; // Pausa o vídeo no modal
                videoInsideModal.src = src; // Reinicia o vídeo pausado
            }
        }
    });

    // Alternar o modal clicado (abre ou fecha)
    const modal = document.getElementById(modalId);
    const videoInsideModal = modal.querySelector('iframe');
    const mainVideo = document.querySelector('.container-videos iframe'); // O vídeo fora do modal

    // Abrir o modal e pausar o vídeo principal
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
        if (videoInsideModal) {
            const src = videoInsideModal.src;
            videoInsideModal.src = ''; // Pausa o vídeo no modal
            videoInsideModal.src = src; // Reinicia o vídeo pausado
        }
    } else {
        modal.style.display = 'flex';
        if (mainVideo) {
            const src = mainVideo.src;
            mainVideo.src = ''; // Pausa o vídeo fora do modal
            mainVideo.src = src; // Reinicia o vídeo pausado
        }
    }
}

// Função para alternar o botão de curtida
function toggleLike(element) {
    element.classList.toggle('liked'); // Adiciona ou remove a classe 'liked' para alterar o estilo
    const likeCountElement = element.nextElementSibling; // O próximo elemento span (contador de likes)
    let likeCount = parseInt(likeCountElement.textContent); // Pega o número atual de likes
    likeCount = element.classList.contains('liked') ? likeCount + 1 : likeCount - 1; // Adiciona ou remove 1
    likeCountElement.textContent = likeCount; // Atualiza o contador
}

// Função para configurar o envio de comentários
function setupCommentForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach((form, index) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentInput = this.querySelector('.commentInput');
            const commentSectionId = `commentSection${index + 1}`;
            const commentSection = document.getElementById(commentSectionId);

            // Verifica se o comentário está vazio
            if (commentInput.value.trim() === '') {
                alert('O comentário não pode estar em branco.');
                return;
            }

            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentInput.value;
            commentSection.appendChild(newComment);
            commentInput.value = '';
        });
    });
}

// Inicializar a configuração dos formulários de comentário
setupCommentForms();

// Inicializar função para garantir que apenas um vídeo seja reproduzido por vez
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('play', function() {
        pauseOtherVideos(this);
    });
});
