//Comparacion y operador estricto

const numero1 = 20
const numero2 =  "20"

/*
== comparacion pero no es estricto
=== comparacion estricta por valor y tipo de dato
*/

if (numero1 == numero2) {
    console.log("si, son iguales")
} else {
    console.log("no, no son iguales")
}

const autenticado = true
if (autenticado) {
    console.log("si esta autenticado")
}