// Selecionar o botão (div) que abre o modal
var btnAddEvento = document.getElementById("btn-adc");

// Selecionar o modal
var eventoModal = document.getElementById("eventoModal");

// Selecionar o botão de fechar
var closeBtn = document.querySelector(".close");

// Abrir o modal ao clicar na div "Adicionar evento"
btnAddEvento.onclick = function() {
    eventoModal.style.display = "flex";
}

// Fechar o modal ao clicar no botão de fechar
closeBtn.onclick = function() {
    eventoModal.style.display = "none";
}

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target == eventoModal) {
        eventoModal.style.display = "none";
    }
}
