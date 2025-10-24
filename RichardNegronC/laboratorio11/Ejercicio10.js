let condition=0;
do {
    console.log("1.Calcular estadisticas de N notas")
    console.log("2.Conatar numero pares e impares en un rango")
    console.log("3.Generar una tabla de multiplicar")
    console.log("0.SALIR");
    condition=parseInt(prompt("Ingrese la Opcion:"))
    if(opcion==1){
        console.log("1.Promedio")
        console.log("2.Valor maximo")
        console.log("3.Valor minimor")
        console.log("4.Cantidad de pares e impares")
        console.log("5.Cuantos estan por enciama de promedio")
        condition=parseInt(prompt("Ingrese la Opcion:"))
    }
} while (condition!=0);