

// Função para alternar o modal do autor
function toggleAuthorModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Função para alternar o modal de compartilhamento
function toggleShareModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Função para enviar comentário
// Função para alternar a seção de comentários
function toggleCommentSection(containerId) {
    const commentContainer = document.getElementById(containerId);
    const videoContainer = commentContainer.closest('.video-container');
    const isActive = commentContainer.classList.contains('active');

    // Remove a classe 'active' de todos os outros containers
    document.querySelectorAll('.video-container').forEach(vc => vc.classList.remove('active'));
    document.querySelectorAll('.container-comentario').forEach(cc => cc.classList.remove('active'));

    if (!isActive) {
        commentContainer.classList.add('active');
        videoContainer.classList.add('active');
        toggleInactiveState(true); // Ativa o estado inativo
    } else {
        toggleInactiveState(false); // Desativa o estado inativo
    }
}

// Função para alternar o estado inativo dos elementos
function toggleInactiveState(isInactive) {
    const elements = document.querySelectorAll('header, .video-container:not(.active), footer');
    elements.forEach(element => {
        if (isInactive) {
            element.classList.add('inactive');
        } else {
            element.classList.remove('inactive');
        }
    });
}

// Função para alternar o botão de curtida
function toggleLike(element) {
    element.classList.toggle('liked');
    const likeCountElement = element.nextElementSibling;
    let likeCount = parseInt(likeCountElement.textContent);
    likeCount = element.classList.contains('liked') ? likeCount + 1 : likeCount - 1;
    likeCountElement.textContent = likeCount;
}

// Função para alternar o modal do autor
function toggleAuthorModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Função para alternar o modal de compartilhamento
function toggleShareModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Função para enviar comentário
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