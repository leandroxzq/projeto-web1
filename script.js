// Form 

const form = document.getElementById('form');

//Cartão

const cardNumber = document.getElementById('card-number');
const expiryDate = document.getElementById('expiry-date');
const cvv = document.getElementById('cvv');

//Cartão InnerText

const cardNumberDiv = document.getElementById('card-numberDiv');
const expiryDateDiv = document.getElementById('expirationDataDiv');
const cvvDiv = document.getElementById('cvvDiv');

// Cep

const address = document.getElementById('address');
const city = document.getElementById('city');
const zipcode = document.getElementById('zipcode');

// Cep InnerText

const addressDiv = document.getElementById('adressDiv');
const cityDiv = document.getElementById('cityDiv');
const zipcodeDiv = document.getElementById('zipDiv');

function validarPagamento(event) {
    event.preventDefault();
    let validado = true;

    if (address.value === "") {
        addressDiv.innerText = "! Preenchar o campo";
        validado = false;
    } else {
        addressDiv.innerText = "";
    }

    if (city.value === "") {
        cityDiv.innerText = "! Preenchar o campo";
        validado = false;
    } else {
        cityDiv.innerText = "";
    }

    if (zipcode.value === "") {
        zipcodeDiv.innerText = "! Preenchar o campo";
        validado = false;
    } else {
        zipcodeDiv.innerText = "";
    }
    

    if (cardNumber.value === "") {
        cardNumberDiv.innerText = "! Número inválido";
        validado = false;
    } else {
        cardNumberDiv.innerText = ""; 
    }

    if (expiryDate.value === "") {
        expiryDateDiv.innerText = "! Data inválida";
        validado = false;
    } else {
        expiryDateDiv.innerText = ""; 
    }

    if (cvv.value === "") {
        cvvDiv.innerText = "! CVV inválido";
        validado = false;
    } else {
        cvvDiv.innerText = ""; 
    }

    if (validado) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra realizada",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => window.location.href = "carrinho.html",1500)
    }
}

const boxGlobal = document.getElementById('select-all');

const quantityInputs = document.querySelectorAll('.select-item');

boxGlobal.addEventListener('change', () => {
    
    quantityInputs.forEach(input => {
        input.checked = boxGlobal.checked;
    });
});