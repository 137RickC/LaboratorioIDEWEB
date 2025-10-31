function crearSecuencia (inicio, paso){
    let valorfinal= inicio;
    return function(){
        return valorfinal+=paso;
    };
}
const secuencia= crearSecuencia(5,3);
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());