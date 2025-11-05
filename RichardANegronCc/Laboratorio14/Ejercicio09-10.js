class Producto{
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio,stock){
        this.#nombre=nombre;
        this.#precio=precio;
        this.#stock=stock;
    }
    get nombre(){ return this.#nombre;}
    set nombre(nombre){ this.#nombre=nombre;}
    get precio(){return `$ ${this.#precio.toFixed(2)}`;}
    set precio(precio){
        precio=Number(precio);
        if(precio>0)this.#precio=precio
        else console.log('El precio debe ser mayor a cero');
    }
    get stock(){return this.#stock}
    set stock(catidad){
        if(cantidad>0)this.#stock= catidad;
        else console.log('cantidad ingresada invalida');
    }
    vender (unidades){
        this.#stock-=unidades;
        console.log('cantidad actulizada')
    }
}
let producto1= new Producto('papitas',1.5,10);

console.log(producto1.nombre);
console.log(producto1.stock);
console.log(producto1.precio);
producto1.vender(2);
console.log(producto1.stock)