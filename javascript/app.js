
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

document.addEventListener("DOMContentLoaded", () => {
    const Entrar = document.querySelector(".btn .btn-second");
    
    ceqButton.addEventListener("click", () => {
      window.location.href = "02_principal.html"; // Substitua "pagina_ceq.html" pelo caminho da página desejada
    });
    
    
});

document.addEventListener('DOMContentLoaded', function () {
    // Botão de Login
    const loginButton = document.querySelector('#Entrar');
    loginButton.addEventListener('click', function () {
        // Redireciona para a página principal
        window.location.href = '02_principal.html'; // Substitua 'pagina_principal.html' pelo caminho correto da sua página principal
    });

    // Botão de Cadastro
    const signupButton = document.querySelector('#Cadastrar');
    signupButton.addEventListener('click', function () {
        // Exibe uma mensagem de cadastro concluído
        alert('Cadastro concluído com sucesso!');
        // Redireciona para a página de login
        window.location.href = '01_index.html'; // Substitua 'index.html' pelo caminho correto da sua página de login
    });
});   
 