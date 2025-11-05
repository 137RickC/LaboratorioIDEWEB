function redondeos(numero){
    //redondero hacia abajo
    console.log(`Redondero hacia abajo: ${Math.floor(numero)}`);
    //redondero hacia arriba
    console.log(`Redondero hacia arriba: ${Math.ceil(numero)}`);
    //redondeo normal
    console.log(`Redondeo normal: ${Math.round(numero)}`);
}
redondeos(12.49);
redondeos(12.5);