function operacionesMatematicas(a, b) {
    function sumar(a, b) { return a + b; }
    function restar(a, b) { return a - b; }
    function multiplicar(a, b) { return a * b; }
    function dividir(a, b) { return a / b; }

    return {
        suma: sumar,
        resta: restar,
        producto: multiplicar,
        cociente: dividir
    };
}

let operaciones = operacionesMatematicas();
console.log(operaciones.suma(10, 5));       
console.log(operaciones.resta(10, 5));      
console.log(operaciones.producto(10, 5));   
console.log(operaciones.cociente(10, 5));   
