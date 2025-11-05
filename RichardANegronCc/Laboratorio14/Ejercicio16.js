class Carrito{
  #objetos;
  constructor(){
    this.#objetos=[]
  }
  agregarProducto(Objeto){
    this.#objetos.push(Objeto);
  }
  calcularTotal(){
    return this.#objetos.reduce((acc,item)=>{return acc+=item.precio},0);
  }
  mostrarResumen(){
    this.#objetos.forEach(item=>console.log(item.mostrarInfo()));
  }
}
class Objeto{
  #nombre;
  #precio;
  constructor(nombre,precio){
    this.#nombre=nombre;
    this.#precio=precio>0?precio:null;
  }
  get precio(){
    return this.#precio;
  }
  mostrarInfo(){
    return `Nombre: ${this.#nombre}\nPrecio: ${this.#precio}`;
  }
}
let o1=new Objeto("Leche", 4);
let o2=new Objeto("Arroz", 4);
let o3=new Objeto("Atún", 3);
let o4=new Objeto("Azúcar", 3.5);
let o5=new Objeto("Col", 2);
let o6=new Objeto("Zanahoria", 1);
let carrito1=new Carrito();
carrito1.agregarProducto(o1);
carrito1.agregarProducto(o2);
carrito1.agregarProducto(o3);
carrito1.agregarProducto(o4);
carrito1.agregarProducto(o5);
carrito1.agregarProducto(o6);
carrito1.mostrarResumen();
console.log(carrito1.calcularTotal());