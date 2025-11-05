function raizYPotencia(){
    let numero= parseInt(prompt("Ingrese un numero: "));
    console.log(`El cuadrado de ${numero} es: `+Math.pow(numero,2));
    console.log(`El cubo de ${numero} es: `+Math.pow(numero,4));
    console.log(`La raiz cuadrada de ${numero} es: `+ Math.sqrt(numero))
}
raizYPotencia();