//Eventos del DOM

const heading =  document.querySelector(".heading")

// heading.addEventListener("click", function() {
//     console.log("diste click en el heading")
    
// })

heading.addEventListener("click", ()=> {
    heading.textContent= "Nuevo Heading al dar click"
    console.log("Nuevo Heading al dar click")
    
})

// heading.addEventListener("click", clickHeading)

// function clickHeading() {
// console.log("Diste click en heading 3")
// }

const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => {
    enlace.addEventListener("click", ()=>{
        console.log("diste click en un enlace")
    })
})