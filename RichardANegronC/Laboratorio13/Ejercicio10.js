function contarLetras(texto) {
    let conteo = new Map();
    for (let letra of texto) {
        if (conteo.has(letra)) {
            conteo.set(letra, conteo.get(letra) + 1);
        } else {
            conteo.set(letra, 1);
        }
    }
    return conteo;
}
console.log(contarLetras("banana"));
