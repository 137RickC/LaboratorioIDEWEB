let carrito = [];
let continuar = true;

while (continuar) {
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));
    
    while (isNaN(precio) || precio <= 0) {
        precio = parseFloat(prompt("Precio inválido. Ingresa un precio válido:"));
    }
    
    carrito.push(precio);
    
    let respuesta = prompt("¿Deseas agregar otro producto? (s/n):").toLowerCase();
    continuar = (respuesta === 's' || respuesta === 'si');
}

let totalParcial = carrito.reduce((suma, precio) => suma + precio, 0);
let descuento = 0;
let mensajeDescuento = "";

if (totalParcial > 100) {
    descuento = totalParcial * 0.10;
    mensajeDescuento = "Tiene un descuento del 10%";
} else if (totalParcial >= 50 && totalParcial <= 100) {
    descuento = totalParcial * 0.05;
    mensajeDescuento = "Gana un cupón de 5%";
} else {
    mensajeDescuento = "No aplica descuento";
}

let totalFinal = totalParcial - descuento;

let resumen = `RESUMEN DE COMPRA:\n`;
resumen += `Total parcial: S/.${totalParcial.toFixed(2)}\n`;
resumen += `${mensajeDescuento}\n`;
if (descuento > 0) {
    resumen += `Descuento aplicado: S/.${descuento.toFixed(2)}\n`;
}
resumen += `TOTAL A PAGAR: S/.${totalFinal.toFixed(2)}`;

console.log(resumen);
alert(resumen);