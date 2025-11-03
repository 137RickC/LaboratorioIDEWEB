function combinarCatalogos(tiendaA, tiendaB) {
    let combinado = {};
    let productos = new Set([...Object.keys(tiendaA), ...Object.keys(tiendaB)]);

    for (let producto of productos) {
        let precioA = tiendaA[producto];
        let precioB = tiendaB[producto];
        
        let precioFinal;
        if (precioA !== undefined && precioB !== undefined) {
            precioFinal = Math.min(precioA, precioB);
        } else {
            precioFinal = precioA ?? precioB; 
        }
        combinado[producto] = parseFloat(precioFinal.toFixed(2));
    }
    return combinado;
}

let tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
};
let tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
};
console.log(combinarCatalogos(tiendaA, tiendaB));
