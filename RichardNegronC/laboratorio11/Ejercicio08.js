let opcion = 0;
do {
  console.log("===== MENÚ DE OPCIONES =====");
  console.log("1. Calcular área del círculo");
  console.log("2. Calcular área del rectángulo");
  console.log("3. Salir");

  opcion = parseInt(prompt("Ingrese la opción (número):"));

  switch (opcion) {
    case 1:
      let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      let areaCirculo = Math.PI * Math.pow(radio, 2);
      console.log(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
      break;

    case 2:
      let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      let areaRectangulo = base * altura;
      console.log(`El área del rectángulo es: ${areaRectangulo.toFixed(2)}`);
      break;

    case 3:
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción inválida. Intente nuevamente.");
      break;
  }

} while (opcion !== 3);
