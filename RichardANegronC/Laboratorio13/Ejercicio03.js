function reordenarPalabras(oracion){
    return oracion.split(" ").sort().map(p=>p.toUpperCase());
}
const palabras="zorro perro gato pez";
console.log(reordenarPalabras(palabras));