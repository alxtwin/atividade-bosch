
//checa se o cadastro existe no localStorage.
//Por enquanto só é aceito um cadastro: email admin@admin.com, senha admin
function checar() {
    let storedEmail = localStorage.getItem('usuarioLocal');
    let storedPw = localStorage.getItem('senhaLocal');

    let userEmail = document.getElementById('userEmail');
    let userPw = document.getElementById('userPw');

    //Se o usuário corresponder ao cadastrado, a mensagem válida é mostrada e é levado aos produtos. 
    //Se o usuário não corresponder ao cadastrado, recebe mensagem de que o usuário não existe.
    if(userEmail.value == storedEmail && userPw.value == storedPw) {
        alert('Usuário autenticado!');
        window.location = './cadastro.html';
    }else {
        alert('Esse usuário não existe.');
    }
}