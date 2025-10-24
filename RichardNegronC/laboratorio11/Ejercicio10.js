let condition;
do {
    console.log("=== MENÚ PRINCIPAL ===");
    console.log("1. Calcular estadísticas de N notas");
    console.log("2. Contar números pares e impares en un rango");
    console.log("3. Generar una tabla de multiplicar");
    console.log("0. Salir");

    condition = parseInt(prompt("Ingrese la opción:"));
    switch (condition) {
        case 1:
            let subOpcion;
            do {
                console.log("=== SUBMENÚ ESTADÍSTICAS ===");
                console.log("1. Promedio");
                console.log("2. Valor máximo");
                console.log("3. Valor mínimo");
                console.log("4. Cantidad de pares e impares");
                console.log("5. Cuántos están por encima del promedio");
                console.log("0. Volver al menú principal");

                subOpcion = parseInt(prompt("Ingrese la opción:"));
                switch (subOpcion) {
                    case 1:
                        console.log("Calculando promedio...");
                        break;
                    case 2:
                        console.log("Buscando valor máximo...");
                        break;
                    case 3:
                        console.log("Buscando valor mínimo...");
                        break;
                    case 4:
                        console.log("Contando pares e impares...");
                        break;
                    case 5:
                        console.log("Verificando notas sobre el promedio...");
                        break;
                    case 0:
                        console.log("Regresando al menú principal...");
                        break;
                    default:
                        console.log("Opción no válida.");
                }
            } while (subOpcion !== 0);
            break;

        case 2:
            console.log("Contar números pares e impares...");
            break;

        case 3:
            console.log("Generar tabla de multiplicar...");
            break;

        case 0:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida, intenta otra vez.");
    }
} while (condition !== 0);
