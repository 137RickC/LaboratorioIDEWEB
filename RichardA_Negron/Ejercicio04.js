function mayorDeTres(a,b,c){
    let mayor =a;
    if (b>a&&b>c) mayor=b
    else mayor=c
    return mayor
}
let a= parseInt(prompt('Ingrese el primer numero:'));
let b= parseInt(prompt('Ingrese el segundo numero:'));
let c= parseInt(prompt('Ingrese el tercer numero: '));
console.log('El mayor de los 3 numeros es:'+ mayorDeTres(a,b,c));