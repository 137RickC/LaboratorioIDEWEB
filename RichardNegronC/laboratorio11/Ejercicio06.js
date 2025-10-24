let rango= parseInt(prompt("Ingrese el rango de la cantida de nunmero primos hasta este mismo:"))
for(let i=0; i<rango;i++){
    let contadorPrimos=0
    for(const j=0;j<Math.sqrt(i);j++){
       if(contadorPrimos===2) console.log(1);
        else contadorPrimos=0;
    }
    
}