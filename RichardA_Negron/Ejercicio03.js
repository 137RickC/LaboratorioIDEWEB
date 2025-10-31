function esMultiplo(a, b) {
    return a % b === 0;
}
let a = parseInt(prompt('Ingrese el primer número: '));
let b = parseInt(prompt('Ingrese el segundo número: '));
console.log(`El número ${a} ${esMultiplo(a, b) ? 'es múltiplo' : 'no es múltiplo'} de ${b}`);
