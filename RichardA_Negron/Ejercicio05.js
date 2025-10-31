const promedioDeTresNotas= function(a,b,c){
return (a+b+c)/3;
};
let a= parseInt(prompt('Ingrese el primer nota:'));
let b= parseInt(prompt('Ingrese el segundo nota:'));
let c= parseInt(prompt('Ingrese el tercer nota: '));
console.log('el promedio de las 3 notas  es: '+promedioDeTresNotas(a,b,c));
