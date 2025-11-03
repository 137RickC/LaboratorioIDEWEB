function invertirMap(map) {
    let modMap = new Map();
    for (let [clave, valor] of map) {
        modMap.set(valor, clave);
    }
    return modMap;
}

let capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
]);

let invertido = invertirMap(capitales);
console.log(invertido);
