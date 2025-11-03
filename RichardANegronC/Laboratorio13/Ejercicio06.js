let listaDeCompras=new Map([
    ["Leche",5],["Arroz",4],["Helado",2],["Pollo",10]
]);
let suma=0;
listaDeCompras.forEach((valor,clave)=>{suma+=valor});
console.log(`El valor total de la lista de comparas es: ${suma}`);
