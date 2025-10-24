console.log("Program para ver si es un nunmeo de Amstrong");
let numero= parseInt(prompt("INGRESE EL NUMERO: "));
cantidadDigitos= String(numero).length;
for(let i=0;i<cantidadDigitos;i++){
    let m=cantidadDigitos; 
    let digito=numero%(10*m)
    suma+=Math.pow(digito,cantidadDigitos);
    digito=0;
    m--;
}
