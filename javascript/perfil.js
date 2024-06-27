// Selecionar elementos do DOM
const modal = document.getElementById('modal');
const btnEditar = document.querySelector('.edit-button');
const spanClose = document.querySelector('.close');

// Abrir o modal ao clicar no botão "Editar"
btnEditar.onclick = function() {
    modal.style.display = 'flex';
}

// Fechar o modal ao clicar no "X"
spanClose.onclick = function() {
    modal.style.display = 'none';
}

// Fechar o modal ao clicar fora da área de conteúdo do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
