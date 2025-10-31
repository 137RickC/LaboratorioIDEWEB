const calculardDescuento= function(precio, porcentaje){
    return precio*porcentaje/100;
};
let precio= prompt('ingrese el precio del producto: ');
let porcentaje= prompt('ingrese la catidad a descontar (%): ')
console.log('el valor a descontar es: '+ calculardDescuento(precio,porcentaje));
