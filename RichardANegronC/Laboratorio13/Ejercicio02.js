const arregloNumeros= [1,2,5,-4,-3];
function filtrarYTransformar(arr){
    return arr.filter(num => num >= 0).map(num => num**2).reduce((suma, num) => suma + num, 0);
}
let numerosMod= filtrarYTransformar(arregloNumeros)
console.log(numerosMod);