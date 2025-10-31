function acumulador(valorInicial){
    let total= valorInicial;
    return function(nuevoValor){
        total+=nuevoValor
        return total;
    }
}
const miacumalador = acumulador(55);
console.log(miacumalador(5));
console.log(miacumalador(4));
console.log(miacumalador(6));