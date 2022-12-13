//Operaciones en los arreglos

const tecnologias = ["HTML", "CSS", "tailwind", "JavaScript", "React", "Node.js"]

//tecnologias.push("GraphQl") //Añade al final del array
//tecnologias.unshift("GraphQl") //Añade al inicio del array

const nuevoArreglo = [...tecnologias, "GraphQL"]
const nuevoArreglo2 = ["GraphQL", ...tecnologias]

//Eliminar elementos del array
//tecnologias.pop() //elimina elementos al final
//tecnologias.shift() //elimina primer elemento del arreglo
//tecnologias.splice(2, 1)

//filter no modifica el arreglo original

const nuevoArray = tecnologias.filter(function(tech){
    if (tech === "HTML"){
        return "GraphQL"
    } else {
        return tech
    }
})


//Reemplazar elementos del array

console.table(tecnologias)

console.log(nuevoArreglo)
console.log(nuevoArreglo2)
console.table(nuevoArray)

