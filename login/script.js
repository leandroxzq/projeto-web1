function validarLogin() {
    let validado = true;

    const campos = [
        { id: 'nome', mensagemErro: "! Insira seu Usuário", erroId: 'rnome' },
        { id: 'senha', mensagemErro: "! Insira sua Senha", erroId: 'rsenha' },
    ]

    campos.forEach(campo => {
        const elemento = document.getElementById(campo.id)
        const erro = document.getElementById(campo.erroId)

        if (elemento.value === "") {
            erro.innerText = campo.mensagemErro
            validado = false;
        } else {
            erro.innerText = ""
        }
    });

    if (validado) {
        document.getElementById('loader').classList.add('show');
        setTimeout(() => window.location.href = '../index.html', 1000);
    }
}

const formLogin = document.getElementById("forml");
if (formLogin) {
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        validarLogin();
    });
}

function validarCadastro() {
    let validado = true;

    const campos = [
        { id: 'nome', mensagemErro: "! Insira seu Usuário", erroId: 'rnome' },
        { id: 'email', mensagemErro: "! Insira seu Email", erroId: 'remail' },
        { id: 'senha1', mensagemErro: "! Insira sua Senha", erroId: 'rsenha' },
        { id: 'senha2', mensagemErro: "! Confirme sua Senha", erroId: 'rsenha2' }
    ];

    campos.forEach(campo => {
        const elemento = document.getElementById(campo.id);
        const erro = document.getElementById(campo.erroId);
        
        if (elemento.value === "") {
            erro.innerText = campo.mensagemErro;
            validado = false;
        } else {
            erro.innerText = "";
        }
    });

    if (validado) {
        document.getElementById('loader').classList.add('show');
        setTimeout(() => window.location.href = 'login.html', 1000);
    }
}

const formCadastro = document.getElementById("formc");
if (formCadastro) {
    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();
        validarCadastro();
    });
}

function validarEmail () {
    const inputEmail = document.getElementById("recuperar");
    const erroEmail = document.getElementById("rrecuperar");

    let validado = true;

    if (inputEmail.value === "") {
        erroEmail.innerText = "! Insira seu Email"
        validado = false;
    } else {
        erroEmail.innerText = ""
    }

    if (validado) {
        document.getElementById('loader').classList.add('show');
        setTimeout(() => window.location.href = 'login.html', 1000);
    }
}

const email = document.getElementById("formr");
if (email) {
    email.addEventListener("submit", (event) => {
        event.preventDefault();
        validarEmail()
    })
}