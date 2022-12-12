//Objetos


const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//destructuring

const {nombre, precio, disponible} = producto

console.log(nombre)
console.log(producto.precio)
console.log(producto.disponible)

//object literal
const autenticado = true
const usuario = "Angelica"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)

