function procesarTexto(texto) {       
    let limpiarEspacios= (texto)=>{ return texto.join('')};
    let contarPalabrtas= (texto)=>{ return texto.length};
    return `El texto sin espacios es: "${limpiarEspacios(texto.split(' '))}" 
    y la cantidad de palabras es: ${contarPalabrtas(texto.split(' '))}`;
}
console.log(procesarTexto("Laboratorio de IDWEB"))