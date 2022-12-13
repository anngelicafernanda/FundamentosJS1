const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    const nombre = document.querySelector(".nombre").value
    const password = document.querySelector(".password").value
    console.log(nombre)
    console.log(password)
    


    const alerta = document.createElement("DIV")
    alerta.classList.add("alerta")
    console.log(alerta)

    if (nombre === "" || password === "") {
        alerta.textContent = "Todos los campos son obligatorios"
        alerta.classList.add("error")
    } else {
        alerta.textContent = "Todo Bien.." 
        alerta.classList.add("exito")
    }
    
    formulario.appendChild(alerta)

    const alertaPrevia = document.querySelector(".alerta")
    if(alerta){
      alertaPrevia.remove()
    }
})