// Função para alternar o modal de comentários e vídeo
function toggleCommentModal(modalId) {
    // Fechar todos os modais abertos
    const modals = document.querySelectorAll('.comment-modal');
    modals.forEach(modal => {
        if (modal.id !== modalId) {
            modal.style.display = 'none';  // Fecha todos os modais que não sejam o atual
        }
    });

    // Alternar o modal clicado (abre ou fecha)
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
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
