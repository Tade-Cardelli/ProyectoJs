
const carritoContenedor = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const url = './productos.json'

let carrito = []


botonVaciar.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Has vaciado el carrito',
        text: 'Presione aceptar para continuar',
        confirmButtonText: 'Aceptar'
      })
    carrito.length = 0
    actualizarCarrito()
})

const agregarProductos = () =>{
    const lista = document.getElementById('listado')
    fetch(url)
        .then((res)=> res.json())
        .then((productos)=>{
            productos.forEach((producto) => {
                const boton = document.getElementById(`agregar${producto.id}`)
                boton.addEventListener('click',()=>{
                    Swal.fire({
                        title: 'Has agregado un producto al carrito',
                        text: 'Presione aceptar para continuar',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                agregarCarrito(producto.id,productos,producto.cantidad)
                })
            });
        })
}
const agregarCarrito = (prodId, productos) =>{
    const exist = carrito.some(prod => prod.id === prodId)
    if(exist){
        const prod = carrito.map(prod =>{
            if(prod.id===prodId){
                prod.cantidad++
            }
        })
    } else {
    
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
}
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
        //Usa metodo reduce para sumar el precio
        precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad, 0) 
    
}

// Al cargar la pagina obtiene el carrito de local storage y lo guarda en el arreglo
const carritoEnLocalStorage = JSON.parse(localStorage.getItem('carrito'));
if (carritoEnLocalStorage) {
    carrito = carritoEnLocalStorage; 
}

actualizarCarrito()
agregarProductos()

