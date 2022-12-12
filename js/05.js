//Objetos - Manipulacion

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
//esta propiedad no permite modificar el objeto
//Object.freeze(producto)

// Permite modificar propiedades existentes pero no permite
//añadir ni eliminarlas
Object.seal(producto)

//Reescribir un valor

producto.nombre = "Monitor Curvo"

//Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

//eliminar propiedades
delete producto.disponible
delete producto.calificaciones


console.table(producto)