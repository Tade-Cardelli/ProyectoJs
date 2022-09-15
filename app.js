productos = [
    {id:1, nombre:"Curso hmtl", precio:"$20.000",},
    {id:2, nombre:"Curso Css", precio:"$50.000", },
    {id:3, nombre:"Curso JS", precio:"$50.000"}
]

carrito = []

const boton1 = document.querySelector("button")
const boton2 = document.getElementById("btn2")
const boton3 = document.getElementById("btn3")

boton.addEventListener("click", () =>{
    alert("Has seleccionado el curso de Html")
})
boton2.addEventListener("click", () =>{
    alert("Has seleccionado el curso de Css")
})
boton3.addEventListener("click", () =>{
    alert("Has seleccionado el curso de Javasript")
})
