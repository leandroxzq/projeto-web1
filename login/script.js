const form = document.getElementById('form');

//Login
const nome = document.getElementById('nome');
const rnome = document.getElementById('rnome');

const senha = document.getElementById('senha');
const rsenha = document.getElementById('rsenha');


//Cadastro
const email = document.getElementById('email');
const remail = document.getElementById('remail');

const senha1 = document.getElementById('senha1');
const senha2 = document.getElementById('senha2');

// 

const recuperar = document.getElementById('recuperar');
const rrecuperar = document.getElementById('rrecuperar');

function validarLogin(event) {
    event.preventDefault();
    let validado = true;

    // Validação do campo nome
    if (nome.value === "") {
        rnome.innerText = "! Insira seu Usuário";
        validado = false;
    } else {
        rnome.innerText = ""; 
    }

    // Validação do campo senha
    if (senha.value === "") {
        rsenha.innerText = "! Insira sua Senha";
        validado = false;
    } else {
        rsenha.innerText = ""; 
    }

    if (validado) {
        window.location.href = '../index.html';
    }
}

function validarCadastro(event) {
    event.preventDefault(); 
    let validado = true;
    // Validação do campo nome
    if (nome.value === "") {
        rnome.innerText = "! Insira seu Usuário";
        validado = false;
    } else {
        rnome.innerText = ""; 
    }

    // Validação do campo email

    if (email.value === ""){
        remail.innerText = "! Insira seu Email";
        validado = false;
    } else {
        remail.innerText = ""; 
    }

    // Validação do campo senha
    if (senha1.value === "") {
        rsenha.innerText = "! Insira sua Senha";
        validado = false;
    } else {
        rsenha.innerText = ""; 
    }

    if (senha2.value === "") {
        rsenha2.innerText = "! Insira sua Senha";
        validado = false;
    } else {
        rsenha2.innerText = ""; 
    }

    if (validado) {
        window.location.href = 'login.html';
    }
}

function validarEmailUsuario(event) {
    event.preventDefault(); 
    let validado = true;

    if (recuperar.value === "") {
        rrecuperar.innerText = "! Insira seu Email";
        validado = false;
    }  else {
        rrecuperar.innerText = ""; 
    }

    if (validado) {
        window.location.href = 'login.html';
    }
}