let impares=0;//contador de impares
let pares=0;//contador de pares

for(let i=1; i<=10; i++){
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));
    if(numero % 2 === 0){
        pares++;
    }else{
        impares++;
    }
}
console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);
