function ejecutaOperacion(fn, x, y) {
    return fn(x, y);
}
let producto = (x, y) => x * y; 
let residuo = (x, y) => x % y;
console.log(ejecutaOperacion(producto, 5, 4));
console.log(ejecutaOperacion(residuo, 5, 4));
