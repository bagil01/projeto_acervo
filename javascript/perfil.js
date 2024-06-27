// Selecionar elementos do DOM
const mainModal = document.getElementById('modal');
const modals = {
    nome: document.getElementById('modal-nome'),
    'foto-de-perfil': document.getElementById('modal-foto'),
    'sobre-mim': document.getElementById('modal-sobre'),
    senha: document.getElementById('modal-senha')
};
const editButton = document.querySelector('.edit-button');
const modalCloseButtons = document.querySelectorAll('.close');
const modalContentButtons = document.querySelectorAll('.conteudo > div');

// Função para abrir o modal
function openModal(modal) {
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Abrir o modal principal ao clicar no botão "Editar"
editButton.onclick = function() {
    openModal(mainModal);
};

// Adicionar evento de clique para abrir os modais internos
modalContentButtons.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.className.split(' ')[0]; // Pega a primeira classe para identificar o modal
        closeModal(mainModal); // Fecha o modal principal
        openModal(modals[target]); // Abre o modal correspondente
    });
});

// Adicionar evento de clique para fechar os modais
modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

// Fechar o modal ao clicar fora da área de conteúdo do modal
window.addEventListener('click', function(event) {
    if (event.target === mainModal) {
        closeModal(mainModal);
    }
    Object.values(modals).forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});
