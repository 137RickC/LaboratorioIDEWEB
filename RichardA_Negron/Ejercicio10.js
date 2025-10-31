const mayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";

const componerTransformaciones = (func1, func2) => {
    return (texto) => func2(func1(texto));
};

const transformar = componerTransformaciones(mayusculas, agregarSigno);
console.log(transformar("hola"));
console.log(transformar("mundo")); 
console.log(transformar("javascript")); 