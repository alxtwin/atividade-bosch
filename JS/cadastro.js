//variáveis para o email e a senha no cadastro de usuário 

var email = document.getElementById('usuarioLocal');

var senha = document.getElementById('senhaLocal');



//armazena os dados passados pelo usuário no cadastro 

function armazenar() {

    localStorage.setItem('usuarioLocal', email.value);

    localStorage.setItem('senhaLocal', senha.value);
}