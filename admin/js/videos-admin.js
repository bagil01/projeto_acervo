document.addEventListener("DOMContentLoaded", function() {
    var btnAddVideo = document.getElementById("btn-adc");
    var VideoModal = document.getElementById("videoModal");
    var closeBtn = document.querySelector(".close-modal");

    // Abrir o modal ao clicar na div "Adicionar Video"
    btnAddVideo.onclick = function() {
        VideoModal.style.display = "flex";
    }


    // Fechar o modal ao clicar fora da área de conteúdo
    window.onclick = function(event) {
        if (event.target == VideoModal) {
            VideoModal.style.display = "none";
        }
    }
});
