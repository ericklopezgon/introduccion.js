// Declarcion de variables
const precio = 400000
let price = document.querySelector(".precio-inicial")
price.innerHTML = precio
let total_price = document.querySelector(".valor-total")
let total_amount = parseInt (document.querySelector(".cantidad").innerHTML)

// Eventos
document.querySelector("#sumar").addEventListener("click", add)
document.querySelector("#restar").addEventListener("click", subtract)

// Funciones
// Funcion suma
function add(){
    let plus = document.querySelector(".cantidad")
    let amountplus = parseInt(plus.innerHTML)
    plus.innerHTML = amountplus + 1
    totalamount = parseInt(plus.innerHTML); 
    total_price.innerHTML = totalamount * precio; 
}

// Funcion resta
function subtract(){
    let minus = document.querySelector(".cantidad")
    let amountminus = parseInt(minus.innerHTML)

    if (amountminus <= 0) {
        return
    }
    minus.innerHTML = amountminus - 1
    totalamount = parseInt(minus.innerHTML); 
    total_price.innerHTML = totalamount * precio; 
}

