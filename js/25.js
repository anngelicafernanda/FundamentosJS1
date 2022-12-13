//Eventos del DOM inputs

const inputNombre =  document.querySelector(".nombre")
inputNombre.addEventListener("input", function(event){
    console.log(event.target.value)
})

const inputPassword = document.querySelector(".password")
inputPassword.addEventListener("input", funcionPassword)

function funcionPassword(){
    inputPassword.type = "text"
    setTimeout(()=>{
        inputPassword.type = "password"
    }, 1000);
}