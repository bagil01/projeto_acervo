// Função para alternar a seção de comentários
function toggleCommentSection(containerId) {
    const commentContainer = document.getElementById(containerId);
    const videoContainer = commentContainer.closest('.video-container');

    if (commentContainer.classList.contains('active')) {
        commentContainer.classList.remove('active');
        videoContainer.classList.remove('active');
    } else {
        // Remove a classe 'active' de todos os outros containers
        document.querySelectorAll('.video-container').forEach(vc => vc.classList.remove('active'));
        document.querySelectorAll('.container-comentario').forEach(cc => cc.classList.remove('active'));

        commentContainer.classList.add('active');
        videoContainer.classList.add('active');
    }
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
