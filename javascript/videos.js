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

function toggleCommentSection(containerId) {
    const commentContainer = document.getElementById(containerId);
    if (commentContainer.classList.contains('active')) {
        commentContainer.classList.remove('active');
    } else {
        commentContainer.classList.add('active');
    }
}

function submitComment(event, containerId) {
    event.preventDefault();
    const commentContainer = document.getElementById(containerId);
    const input = commentContainer.querySelector('.commentInput');
    const commentSection = commentContainer.querySelector('.commentSection');
    const commentCount = commentContainer.querySelector('.commentCount');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = input.value;

    commentSection.appendChild(newComment);
    input.value = '';

    commentCount.textContent = parseInt(commentCount.textContent) + 1;
}

function toggleLike(icon) {
    if (icon.classList.contains('liked')) {
        icon.classList.remove('liked');
        icon.nextElementSibling.textContent = parseInt(icon.nextElementSibling.textContent) - 1;
    } else {
        icon.classList.add('liked');
        icon.nextElementSibling.textContent = parseInt(icon.nextElementSibling.textContent) + 1;
    }
}

function showShareCard(videoId) {
    const shareCard = document.getElementById('shareCard');
    const shareLink = document.getElementById('shareLink');
    const video = document.getElementById(videoId);
    shareLink.value = video.src;

    shareCard.style.display = "flex";
}


function closeShareCard() {
    document.getElementById('shareCard').style.display = "none";
}

function copyToClipboard() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    document.execCommand('copy');
    alert('Link copiado para a área de transferência');
}
