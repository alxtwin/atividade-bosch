//cadastra usuario e senha

function armazenar(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    if(name.value.length == 0){
        alert('E-mail não pode estar vazio!!');

    }else if(pw.value.length == 0){
        alert('Senha não pode estar vazia!');
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Sua conta foi criada!');
        window.location="../paginas/index.html"
    }
}


