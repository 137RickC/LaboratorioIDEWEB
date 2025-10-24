console.log("Programa para sumar del 1 a N (excluyendo múltiplos de 5)");
let numero = parseInt(prompt("Ingrese el número N:"));
let suma = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 5 !== 0) {
    suma += i;
  }
}
console.log(`La suma de los números del 1 al ${numero} excluyendo múltiplos de 5 es: ${suma}`);
