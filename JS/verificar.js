//verifica o usuário e senha
function verificar(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Bem vindo '+userName.value+"!");
        window.location="../paginas/feed.html";
    }else{
        alert('Erro no login, verifique usuário e senha.');
    }
}
