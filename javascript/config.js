// Seletores
const abrirModal = document.getElementById('abrirModal');
const fecharModal = document.getElementById('fecharModal');
const modal = document.getElementById('modal');

// Evento ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    const botaoVerPerfis = document.querySelector(".ver-perfis");
    botaoVerPerfis.addEventListener("click", () => {
        window.location.href = "09_perfil.html";
    });

    // Alternar visibilidade do modal ao clicar no ícone
    abrirModal.addEventListener('click', function (e) {
        e.preventDefault();
        if (modal.style.display === 'flex') {
            modal.style.display = 'none'; // Fecha se já estiver aberto
        } else {
            modal.style.display = 'flex'; // Abre o modal
        }
    });

    // Fechar modal clicando no botão fechar
    fecharModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora dele
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
