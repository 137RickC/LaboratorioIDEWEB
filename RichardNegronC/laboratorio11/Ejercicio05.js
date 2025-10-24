let montoDeRetiro= parent(prompt("INGRESE EL MONTO A RETIRAR(solo hay billtes de 100, 50, 20 y 10 )"))
const billetes=[100,50,20,10]
const cantidades=[]// la cantidad de billetes por demonomicacion 
for(let i=0;i<billetes.length;i++){
    let valorBillete=billetes[i];
    let contidad= Math.floor(montoDeRetiro/valorBillete)
    
    cantidades[i]=cantidad
    montoDeRetiro-=cantidad*valorBillete;
}
console.log(billetes)
console.log(cantidades)//imprime en decrenciente en funcion de la demnomicacion del billete