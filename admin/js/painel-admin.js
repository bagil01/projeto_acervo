// Referências
const admDiv = document.getElementById('admDiv');
const userDiv = document.querySelector('.user');

const admModal = document.getElementById('admModal');
const userModal = document.getElementById('userModal');

const closeAdmModalBtn = document.getElementById('closeAdmModalBtn');
const closeUserModalBtn = document.getElementById('closeUserModalBtn');


// Abrir modal de ADMs
admDiv.addEventListener('click', () => {
    admModal.style.display = 'flex';
});

// Abrir modal de Usuários
userDiv.addEventListener('click', () => {
    userModal.style.display = 'flex';
});

// Fechar modal de ADMs
closeAdmModalBtn.addEventListener('click', () => {
    admModal.style.display = 'none';
});

// Fechar modal de Usuários
closeUserModalBtn.addEventListener('click', () => {
    userModal.style.display = 'none';
});

// Fechar modal clicando fora do conteúdo (para ambos os modais)
window.addEventListener('click', (event) => {
    if (event.target === admModal) {
        admModal.style.display = 'none';
    }
    if (event.target === userModal) {
        userModal.style.display = 'none';
    }
});


  // Seleciona os elementos necessários
const denunciaModal = document.getElementById('denunciaModal');
const closeDenunciaModalBtn = document.getElementById('closeDenunciaModalBtn');
const denunciaDiv = document.querySelector('.denuncia');

// Abre o modal de denúncias
denunciaDiv.addEventListener('click', () => {
    denunciaModal.style.display = 'flex'; // Mostra o modal
});

// Fecha o modal de denúncias
closeDenunciaModalBtn.addEventListener('click', () => {
    denunciaModal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === denunciaModal) {
        denunciaModal.style.display = 'none';
    }
});
