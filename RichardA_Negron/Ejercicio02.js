function areaRectangulo(base, altura) {
    return base*altura;
}
let base= prompt("Ingrese la base del rectángulo:");
let altura= prompt("Ingrese la altura del rectángulo:");
console.log(`El area del rectangulo de base ${base} y altura ${altura} es: ${areaRectangulo(base, altura)}`);