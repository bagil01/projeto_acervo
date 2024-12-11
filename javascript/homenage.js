 // Abrir e fechar modal
 const modal = document.getElementById("modal-comentarios");
 const btnVerComentarios = document.querySelector(".ver-comentario");
 const btnFechar = document.querySelector(".close");

 btnVerComentarios.addEventListener("click", function (event) {
     event.preventDefault();
     modal.style.display = "block";
 });

 btnFechar.addEventListener("click", function () {
     modal.style.display = "none";
 });

 window.addEventListener("click", function (event) {
     if (event.target === modal) {
         modal.style.display = "none";
     }
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