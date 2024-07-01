/**
 * Função para exibir o card do autor
 * @param {string} authorId - ID do autor
 */
function showAuthorCard(authorId) {
    const authors = {
        'autor1': {
            image: 'midias/imagem-perfil.jpg',
            name: 'Nome do Autor',
            age: 'XX',
            location: 'Localização'
        },
    };

    const author = authors[authorId];
    if (author) {
        document.getElementById('authorImage').src = author.image;
        document.getElementById('authorName').innerText = author.name;
        document.getElementById('authorAge').innerText = `Idade: ${author.age}`;
        document.getElementById('authorLocation').innerText = `Morador de: ${author.location}`;

        document.getElementById('authorCard').style.display = 'flex';
    }
}

/**
 * Função para fechar o card do autor
 */
function closeAuthorCard() {
    document.getElementById('authorCard').style.display = 'none';
}

/**
 * Função para alternar o like
 * @param {HTMLElement} likeIcon - Ícone de like
 */
function toggleLike(likeIcon) {
    const likeCount = document.getElementById('likeCount');
    let count = parseInt(likeCount.innerText);

    if (likeIcon.classList.contains('liked')) {
        likeIcon.classList.remove('liked');
        likeCount.innerText = --count;
    } else {
        likeIcon.classList.add('liked');
        likeCount.innerText = ++count;
    }
}

/**
 * Função para exibir o card de compartilhamento
 * @param {string} videoId - ID do vídeo
 */
function showShareCard(videoId) {
    const videoUrl = document.getElementById(videoId).src;
    document.getElementById('shareLink').value = videoUrl;
    document.getElementById('shareCard').style.display = 'flex';
}

/**
 * Função para fechar o card de compartilhamento
 */
function closeShareCard() {
    document.getElementById('shareCard').style.display = 'none';
}

/**
 * Função para copiar o link do vídeo para a área de transferência
 */
function copyToClipboard() {
    const copyText = document.getElementById('shareLink');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert('Link copiado: ' + copyText.value);
}

/**
 * Função para alternar a exibição do card de comentários
 */
document.getElementById('comentar').addEventListener('click', function() {
    var comentarioCard = document.querySelector('.container-comentario');
    comentarioCard.classList.toggle('active');
});

document.getElementById('comentar').addEventListener('click', function() {
    var comentarioCard = document.querySelector('.container-videos');
    comentarioCard.classList.toggle('active');
});


/**
 * Função para enviar um comentário
 * @param {Event} event - Evento de envio do formulário
 */
function submitComment(event) {
    event.preventDefault(); // Previne o envio do formulário

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentSection = document.getElementById('commentSection');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
        commentInput.value = ''; // Limpa o campo de entrada

        updateCommentCount(); // Atualiza a contagem de comentários
    }
}

/**
 * Função para atualizar a contagem de comentários
 */
function updateCommentCount() {
    const commentCount = document.getElementById('commentSection').children.length;
    document.getElementById('commentCount').innerText = commentCount;
}
