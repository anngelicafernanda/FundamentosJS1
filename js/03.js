//Tipos de datos

//Undefined

let cliente

console.log(cliente)
console.log(typeof cliente)

//boolean

const descuento = true
console.log(descuento)
console.log(typeof descuento)


//Number

const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//String o cadenas de texto

const alumno = "Angelica"
let producto = "Monitor 20 pulgadas"

const numero = "30"
const numero4 = 30
console.log(typeof numero)
console.log(typeof numero4)
console.log( numero + numero4)

console.log( Number(numero) + numero4)
console.log(typeof numero4)


console.log(typeof numero)
console.log(numero +   String(numero4))


//BigInt

const numeroGrande = BigInt(238924924792479274927492749427)
console.log(numeroGrande)
console.log(typeof numeroGrande)

const numero5 = 10
const numero6 = 20

console.log(numero5 +numero6)
//console.log(numero5 + numeroGrande)

//Symbol

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
//da false pasa porque un symbol siempre va a ser unico

console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())
//aunque tengan el mismo valor, siempre seran diferentes.


//null

const descuento1 = null
console.log(typeof descuento)
