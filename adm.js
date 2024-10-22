// Obter os elementos dos modais
var modal = document.getElementById("communityModal");
var actionModal = document.getElementById("actionModal");
var excluirModal = document.getElementById("excluir-modal");

// Botões para abrir os modais
var btnAddCommunity = document.getElementById("addCommunityBtn");
var btnAddCommunity2 = document.getElementById("editBtn");
var btnOpenModal = document.getElementById("openModalBtn");
var btnEdit = document.getElementById("editBtn");
var btnDelete = document.getElementById("deleteBtn");

// Botões para fechar os modais
var closeCommunityModal = document.getElementsByClassName("close")[0];
var closeActionModal = document.getElementsByClassName("close-action")[0];
var closeExcluirModal = document.getElementsByClassName("close-action")[1]; // O segundo .close-action é para o modal de exclusão

// Botões de ação dentro do modal de exclusão
var cancelBtn = document.getElementById("cancelBtn");
var excBtn = document.getElementById("excBtn");

// Abrir o modal de adicionar comunidade
btnAddCommunity.onclick = function() {
  modal.style.display = "flex";
}

// Abrir o modal de alterar comunidade
  btnAddCommunity2.onclick = function() {
    modal.style.display = "flex";  // Abre o modal de edição
    document.getElementById("actionModal").style.display = "none";  // Fecha o modal de ações
  }

// Abrir o modal de ações
btnOpenModal.onclick = function() {
  actionModal.style.display = "flex";
}

// Abrir o modal de exclusão
btnDelete.onclick = function() {
  actionModal.style.display = "none"; // Fechar o modal de ações
  excluirModal.style.display = "flex"; // Abrir o modal de exclusão
}

// Fechar o modal de adicionar comunidade
closeCommunityModal.onclick = function() {
  modal.style.display = "none";
}

// Fechar o modal de ações
closeActionModal.onclick = function() {
  actionModal.style.display = "none";
}

// Fechar o modal de exclusão
closeExcluirModal.onclick = function() {
  excluirModal.style.display = "none";
}

// Fechar o modal de exclusão ao clicar no botão "Cancelar"
cancelBtn.onclick = function() {
  excluirModal.style.display = "none";
}

// Adicionar lógica ao clicar em "Excluir"
excBtn.onclick = function() {
  alert("Comunidade excluída com sucesso!"); // Coloque aqui sua lógica de exclusão real, como uma chamada ao backend
  excluirModal.style.display = "none";
}

// Fechar o modal clicando fora da área do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == actionModal) {
    actionModal.style.display = "none";
  }
  if (event.target == excluirModal) {
    excluirModal.style.display = "none";
  }
}
