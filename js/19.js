const saldo = 600
const pagar = 500
const tarjeta = true

/*
|| al menos una condicion debe cumplirse
&& todas las condiciones deben cumplirse
*/

if (saldo > pagar ) {
    console.log("puedes pagar con tu saldo")
} else if (tarjeta){
    console.log("Puedes pagar con tu tarjeta")
 
} else {
    console.log("no no puedes pagar")
}


if (saldo > pagar || tarjeta) {
    console.log("puedes pagar")
} else {
    console.log("no no puedes pagar")
}

if (saldo > pagar && tarjeta) {
    console.log("puedes pagar")
} else {
    console.log("no no puedes pagar")
}