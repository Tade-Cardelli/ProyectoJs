/* 
const productos = [
    {nombre:"teclado", precio: 1000},
    {nombre:"mouse", precio: 850},
    {nombre:"auriculares", precio:2000},
    {nombre:"monitor", precio:5000},
];


let carrito = []
function verificacionCompra(){
    let opcion = prompt("Buenas, desea comprar algun componente- si/no")
    while(opcion != "si" && opcion != "no"){
    alert("La palabra ingresada es incorrecta, por favor ingrese si/no")
    opcion = prompt("Buenas, desea comprar algun componente- si/no")
    }
    if(opcion == "si"){
        alert("Lista de productos")
        let todosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
        alert(todosProductos.join("-"))
    }else if(opcion =="no") {
        alert("Gracias por ver, hasta luego")
    }
    return opcion
}


function agregarAlCarrito(opcion){
    while(opcion != "no"){
        let producto = prompt("Agrega un producto al carrito")
        let precio = 0
    
        if(producto == "teclado" || producto == "mouse" || producto =="auriculares" || producto =="monitor"){
            switch(producto){
                case "teclado":
                    precio = 1000
                    break;
                case "mouse":
                    precio = 850
                    break;
                case "auriculares":
                    precio = 2000
                    break;
                case "monitor":
                    precio = 5000
                    break;
                default:
                    break;

            }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))
        carrito.push({producto, unidades, precio})
        } else {
            alert("no tenemos ese producto")
        }
        opcion = prompt("¿Quiere seguir comprando?")
        while(opcion === "no"){
            alert("Gracias por la compra!!")
            carrito.forEach((carritoFinal) => 
                alert(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}// Total a pagar por producto $ ${carritoFinal.unidades * carritoFinal.precio}` )) 
        break;  
        }
    }
}

function sumaTotal(Total){
    const total = carrito.reduce((acum,el) =>acum + el.precio * el.unidades , 0)
    alert(`El total es de ${total} pesos`)
}
sumaTotal(agregarAlCarrito(verificacionCompra()))

 


productos = [
    {id:1 , nombre:"martillo"},
    {id:2, nombre:"destornillador"},
    {id:3, nombre:"llave"}
]

const encontrarProd = (id)=>{
    const item = productos.find ((prod)=>prod.id === id)
    return new Promise((resolve,rejected)=>{
        if(item){
            resolve(item)
        } else{
            rejected("No se encuentra disponible")
        }
    })
} 

encontrarProd(2)
    .then((item) =>{console.log(item)})
    .catch((error) =>{console.log(error)})
*/




