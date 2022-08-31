
function impuesto(){
    let precio = prompt("Ingrese un precio para calcular el IVA o escriba ESC para salir")
    while (precio != "ESC" && precio != "esc"){
        let iva = (precio * 21)/100;
        let total = Number(precio) + iva;
        console.log(iva);
        console.log(total);
        alert(`El impuesto es de ${iva} pesos adicionales y el total es de ${Number (total)}`)
        break
    }
}

impuesto();
