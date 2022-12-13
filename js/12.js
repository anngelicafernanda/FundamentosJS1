//Funciones - function declaration

// sumar() 

// function sumar(){
//     console.log(2+2)
// }



// sumar1(10, 30)
// sumar1(40, 9)
// sumar1(50, 6)
// sumar1(60, 3)
// sumar1(60)

function sumar1(numero, numero2 = 0){
    return {
        resultado: numero + numero2,
        mensaje: "Hola mundo"
    }
}

const {resultado, mensaje} = sumar1(20, 30)

console.log(resultado)
console.log(mensaje)