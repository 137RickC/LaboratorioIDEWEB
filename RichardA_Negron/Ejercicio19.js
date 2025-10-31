function filtrarArreglo(arr, callback) {
    const resultado = [];
    for (let elemento of arr) {
        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
let numeros = [5, 15, 20, 24, 30];
let esMultiploDe5 = (numero) => numero % 5 === 0;
console.log(filtrarArreglo(numeros, esMultiploDe5));
