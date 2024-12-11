 // Abrir e fechar modal
 document.getElementById("icon-comentario").addEventListener("click", function () {
    document.getElementById("modal-comentarios").style.display = "block";
});

document.querySelector(".modal .close").addEventListener("click", function () {
    document.getElementById("modal-comentarios").style.display = "none";
});

 // Adicionar novo comentário
 const btnEnviarComentario = document.getElementById("btn-enviar-comentario");
 const inputComentario = document.getElementById("novo-comentario");
 const listaComentarios = document.querySelector(".comentarios-lista");

 btnEnviarComentario.addEventListener("click", function () {
     const textoComentario = inputComentario.value.trim();

     if (textoComentario !== "") {
         const novoComentario = document.createElement("div");
         novoComentario.classList.add("comentario");
         novoComentario.innerHTML = `<p><strong>Você:</strong> ${textoComentario}</p>`;

         listaComentarios.appendChild(novoComentario);
         inputComentario.value = "";
     }
 });


 // Função para alternar o botão de curtida
function toggleLike(element) {
    element.classList.toggle('liked'); // Adiciona ou remove a classe 'liked' para alterar o estilo
    const likeCountElement = element.nextElementSibling; // O próximo elemento span (contador de likes)
    let likeCount = parseInt(likeCountElement.textContent); // Pega o número atual de likes
    likeCount = element.classList.contains('liked') ? likeCount + 1 : likeCount - 1; // Adiciona ou remove 1
    likeCountElement.textContent = likeCount; // Atualiza o contador
}
