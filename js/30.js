//Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"



const consultarAPI = async () => {
  const respuesta = await fetch(url)
  console.log("Despues de respuesta")
  const resultado = await respuesta.json()
  console.log(resultado) 
  console.log("Despues de resultado") 
  }

consultarAPI();