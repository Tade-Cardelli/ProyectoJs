productos = [
    {id:1, nombre:"Curso hmtl", precio:20000, cantidad:1},
    {id:2, nombre:"Curso Css", precio:30000, cantidad:1},
    {id:3, nombre:"Curso JS", precio:50000, cantidad:1}
]

const carritoContenedor = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
})

botonVaciar.addEventListener('click', ()=>{
    carrito.length = 0
    actualizarCarrito()
})

productos.forEach((producto) => {
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click',()=>{
    agregarCarrito(producto.id)
    })
});




const agregarCarrito = (prodId) =>{

        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
        console.log(carrito)
        actualizarCarrito()

}

const eliminarDelCarrito=(prodId) =>{
    // Uso find para poder encontrar el producto mediante la Id 
    const item = carrito.find((prod) => prod.id === prodId)
    // Saco el indice para poder usar splice
    const indice = carrito.indexOf(item)
    // Uso splice par poder eliminar una compra del carrito basandome en el indice
    carrito.splice(indice, 1)
    actualizarCarrito()
}   

const actualizarCarrito = ()=>{
    carritoContenedor.innerHTML = ""
    carrito.forEach((prod) =>{
        const div = document.createElement('div')
        div.innerHTML = `
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id:"cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})">Eliminar</button>
        `
        carritoContenedor.appendChild(div)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio, 0) 
    console.log(precioTotal)
}

