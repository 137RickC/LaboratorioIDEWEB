function esPar(numero) {
    return numero % 2 === 0;
}
let numero=parseInt(prompt("Ingrese un numero entero:"));
console.log("El numero " + numero + (esPar(numero) ? " es par." : " no es par."));