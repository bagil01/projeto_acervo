// Selecionar o botão (div) que abre o modal
var btnAddVideo = document.getElementById("btn-adc");

// Selecionar o modal
var VideoModal = document.getElementById("videoModal");

// Selecionar o botão de fechar
var closeBtn = document.querySelector(".close");

// Abrir o modal ao clicar na div "Adicionar Video"
btnAddVideo.onclick = function() {
    VideoModal.style.display = "flex";
}

// Fechar o modal ao clicar no botão de fechar
closeBtn.onclick = function() {
    VideoModal.style.display = "none";
}

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target == VideoModal) {
        VideoModal.style.display = "none";
    }
}