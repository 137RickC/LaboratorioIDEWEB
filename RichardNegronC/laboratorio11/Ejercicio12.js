let presupuesto = parseFloat(prompt("Ingresa tu presupuesto:"));
while (isNaN(presupuesto) || presupuesto <= 0) {
    presupuesto = parseFloat(prompt("Presupuesto inválido. Ingresa un monto válido:"));
}
let carrito = [];
let totalActual = 0;
let continuar = true;

while (continuar && totalActual < presupuesto) {
    let precio = parseFloat(prompt(`Ingresa el precio del producto (Presupuesto restante: S/.${(presupuesto - totalActual).toFixed(2)}):`));
    
    while (isNaN(precio) || precio <= 0) {
        precio = parseFloat(prompt("Precio inválido. Ingresa un precio válido:"));
    }
    
    if (totalActual + precio > presupuesto) {
        alert(`Ese producto supera tu presupuesto. Intenta con un monto menor.`);
        continue; // <- en vez de cortar el bucle, vuelve a pedir otro
    }
    carrito.push(precio);
    totalActual += precio;
    
    if (totalActual < presupuesto) {
        let respuesta = prompt("¿Deseas agregar otro producto? (s/n):").toLowerCase();
        continuar = (respuesta === 's' || respuesta === 'si');
    } else {
        alert("Has alcanzado tu presupuesto máximo.");
        continuar = false;
    }
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
resumen += `Presupuesto: S/.${presupuesto.toFixed(2)}\n`;
resumen += `Productos agregados: ${carrito.length}\n`;
resumen += `Total parcial: S/.${totalParcial.toFixed(2)}\n`;
resumen += `${mensajeDescuento}\n`;
if (descuento > 0) {
    resumen += `Descuento aplicado: S/.${descuento.toFixed(2)}\n`;
}
resumen += `TOTAL A PAGAR: S/.${totalFinal.toFixed(2)}\n`;
resumen += `Presupuesto restante: S/.${(presupuesto - totalFinal).toFixed(2)}`;

console.clear();
console.log(resumen);
alert(resumen);
