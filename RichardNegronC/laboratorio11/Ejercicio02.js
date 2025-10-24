let edad = prompt("Por favor ingresa tu edad:");
while (edad < 0) {
    edad = prompt("Entrada inválida. Por favor ingresa una edad válida:");
}
if (edad <12) {
    console.log("Eres un niño.");
}else if (edad >= 12 && edad <= 17) {
    console.log("Eres un adolescente.");
}else if (edad >= 18 && edad <= 59) { 
    console.log("Eres un adulto.");
}else{
    console.log("Eres un adulto mayor.");
}
