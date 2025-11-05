function numeroAleatorio(min, max){
    return parseInt(Math.random()*(max-min+1)+min);
}
console.log(numeroAleatorio(2,20));