function contarPalabrasdetexto(texto){
    let arr= texto.toLowerCase().split(" ");
    let conteo= new Map();
    for (let palabra of arr){
        if(conteo.has(palabra)) conteo.set(palabra, conteo.get(palabra)+1);
        else conteo.set(palabra,1);
    }
    return conteo;
}
const cadena="sol luna sol sol estrellita luna";
console.log(contarPalabrasdetexto(cadena));