class Figura{
  area(){}
  perimetro(){}
}
class Cuadrado extends Figura{
  #lado;
  constructor(lado){
    super();
    this.#lado=lado;
  }
  area(){
    return this.#lado**2;
  }
  perimetro(){
    return 4*this.#lado;
  }
}
class Triangulo extends Figura{
  #base;
  #altura;
  constructor(base,altura){
    super();
    this.#base=base;
    this.#altura=altura;
  }
  area(){
    return this.#base*this.#altura/2;
  }
  perimetro(){
    return this.#base+this.#altura+Math.hypot(this.#base,this.#altura);
  }
}
let cuadrado1=new Cuadrado(5);
console.log(cuadrado1.area());
console.log(cuadrado1.perimetro());
let triangulo1=new Triangulo(4,5);
console.log(triangulo1.area());
console.log(triangulo1.perimetro());