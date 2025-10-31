function media(...numeros){
    let suma= numeros.reduce((acumulador,number)=>acumulador+number);
    return suma/numeros.length;
}
console.log(media(1,3,6,3,9,6));