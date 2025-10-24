console.log("Programa para verificar si un número es de Armstrong");
let numero = parseInt(prompt("Ingrese el número:"));
let original = numero; 
let cantidadDigitos = String(numero).length;
let suma = 0;
// Recorremos cada dígito
while (numero > 0) {
  let digito = numero % 10; // extrae el último dígito
  suma += Math.pow(digito, cantidadDigitos); // eleva y suma
  numero = Math.floor(numero / 10); // quita el último dígito
}
// Mostramos el resultado
if (suma === original) {
  console.log(`${original} es un número de Armstrong.`);
} else {
  console.log(`${original} no es un número de Armstrong.`);
}

