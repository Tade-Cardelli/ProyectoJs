const productos = [
    {nombre:"teclado", precio: 1000},
    {nombre:"mouse", precio: 850},
    {nombre:"auriculares", precio:2000},
    {nombre:"monitor", precio:5000},
];
let carrito = []

let opcion = prompt("Buenas, desea comprar algun componente- si/no")

while(opcion != "si" && opcion != "no"){
    alert("La palabra ingresada es incorrecta, por favor ingrese si/no")
    opcion = prompt("Buenas, desea comprar algun componente- si/no")
}
if(opcion == "si");{
    alert("Lista de productos")
    let todosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosProductos.join("-"))
}   if(opcion == "no"){
    alert("Gracias por ver, hasta luego")
}
