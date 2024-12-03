// Seleciona o modal principal e o modal de Tela e Acessibilidade
const modalPrincipal = document.getElementById("modal");
const modalTelaAcessibilidade = document.getElementById("telaAcessibilidadeModal");

// Botões e elementos
const botaoTelaAcessibilidade = document.querySelector(".container-opcoes .opcao:nth-child(4)");
const botaoVoltar = document.querySelector("#telaAcessibilidadeModal .voltar");
const abrirModal = document.getElementById("abrirModal");
const fecharModalPrincipal = document.getElementById("fecharModal");

// Funções para abrir e fechar os modais
abrirModal.addEventListener("click", () => {
    modalPrincipal.style.display = "block";
});

fecharModalPrincipal.addEventListener("click", () => {
    modalPrincipal.style.display = "none";
});

botaoTelaAcessibilidade.addEventListener("click", () => {
    modalPrincipal.style.display = "none"; // Fecha o modal principal
    modalTelaAcessibilidade.style.display = "block"; // Abre o modal de Tela e Acessibilidade
});

botaoVoltar.addEventListener("click", () => {
    modalTelaAcessibilidade.style.display = "none"; // Fecha o modal de Tela e Acessibilidade
    modalPrincipal.style.display = "block"; // Reabre o modal principal
});

// Fechar o modal clicando fora dele
window.addEventListener("click", (e) => {
    if (e.target === modalPrincipal) {
        modalPrincipal.style.display = "none";
    }
    if (e.target === modalTelaAcessibilidade) {
        modalTelaAcessibilidade.style.display = "none";
    }
});

// Seleciona o modal de Ajuda e Suporte
const modalAjudaSuporte = document.getElementById("ajudaSuporteModal");
const botaoAjudaSuporte = document.querySelector(".container-opcoes .opcao:nth-child(3)");
const voltarAjudaSuporte = document.getElementById("voltarAjudaSuporte");

// Evento para abrir o modal de Ajuda e Suporte
botaoAjudaSuporte.addEventListener("click", () => {
    modalPrincipal.style.display = "none"; // Fecha o modal principal
    modalAjudaSuporte.style.display = "block"; // Abre o modal de Ajuda e Suporte
});

// Evento para voltar ao modal principal a partir de Ajuda e Suporte
voltarAjudaSuporte.addEventListener("click", () => {
    modalAjudaSuporte.style.display = "none"; // Fecha o modal de Ajuda e Suporte
    modalPrincipal.style.display = "block"; // Reabre o modal principal
});

// Fechar o modal clicando fora dele
window.addEventListener("click", (e) => {
    if (e.target === modalAjudaSuporte) {
        modalAjudaSuporte.style.display = "none";
    }
});
