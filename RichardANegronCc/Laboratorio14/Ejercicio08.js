function normalizarCalificaciones(...arr){
    let notaMayor= Math.max(...arr);
    console.log(arr.map(n=>n/notaMayor));
}
normalizarCalificaciones(14,11, 17, 20, 15, 10);