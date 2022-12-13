//Iteradores en JS

const tecnologias = ["HTML", "CSS", "tailwind", "JavaScript", "React", "Node.js"]

//forEach - acceder a cada elemento del array
const arrayyForeach = tecnologias.forEach(function(tech){
    return console.log(tech)
})

//crea un nuevo arreglo
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayyForeach)
console.log(arrayMap)