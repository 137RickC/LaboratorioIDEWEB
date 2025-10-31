function crearContador (){
    let contador=0;
    let incrementar=()=> {return contador++};
    let resetear=()=>{return contador=0};
    return{
        incrementar, 
        resetear
    }
    
}
let contador=crearContador()
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());