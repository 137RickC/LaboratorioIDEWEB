let rango = parseInt(prompt("Ingrese el rango máximo:"));
console.log(`Números primos hasta ${rango}:`);

for (let i = 2; i <= rango; i++) {
  let esPrimo = true;
  // Verificamos divisibilidad desde 2 hasta la raíz cuadrada del número
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      esPrimo = false;
      break; // ya no es primo, salimos del bucle
    }
  }
  if (esPrimo) {
    console.log(i);
  }
}
