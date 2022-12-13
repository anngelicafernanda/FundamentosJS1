const tecnologias = ["HTML", "CSS", "tailwind", "JavaScript", "React", "Node.js"]

const numeros = [10, 20, 30]

let nuevoArray;

//filter

nuevoArray = tecnologias.filter(tech=> tech !== "React")

//Comprobar si un elemento existe en el array
const resultado1 = tecnologias.includes("GraphQL")

//Some - devuelve si al menos uno cumple la condicion
const resultado2 = numeros.some(numero => numero > 15)

//Find devuelve el primer elemento que cumpla la condicion
const resultado3 = numeros.find(numero => numero > 15)

//every retorna tru o false si todos los elementos cumplen la condicion
const resultado4 =  numeros.every(numero => numero > 9 )

//Reduce Acumulando en el total
const resultado5 = numeros.reduce((total, numero) => numero + total ,0)

//filter crea un nuevo array en base a una condicion
const resultado6 = tecnologias.filter(tech => tech === "Node.js")
const resultado7 = numeros.filter(numero => numero !== 10)

//Foreach 

tecnologias.forEach((tech, index)=>{console.log( index)})

//Map crea un nuevo array

const arrayMap = tecnologias.map(tech => tech)



console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(resultado7)

console.log(arrayMap)


//evitar los que muten en react