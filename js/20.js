const autenticado = true
autenticado ? console.log("usuario autenticado") : console.log("usuario no autenticado")

//doble ternario


const saldo = 600
const pagar = 500
const tarjeta = true

saldo > pagar ? console.log("puedes pagar con saldo") : tarjeta ? console.log("Puedes pagar con tarjeta ") :
console.log("No puedes pagar")
