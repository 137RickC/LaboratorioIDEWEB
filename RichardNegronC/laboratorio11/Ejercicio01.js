let sumaDeNotas = 0;
for(let i=0; i<5; i++){
    let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
    if (nota < 0 || nota >20) {//las noatas solo estan entre 0 y 20
        console.log("Nota inválida. Por favor ingrese una nota entre 0 y 100.");
        i--;
        continue;
    }else{
    sumaDeNotas += nota;//Suma las notas 
    }
}
console.log("El promedio de las notas es: " + (sumaDeNotas / 5));
//muestra el promedio