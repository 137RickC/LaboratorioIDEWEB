class Empleado{
  #nombre;
  #sueldoBase;
  constructor(nombre,sueldoBase){
    this.#nombre=nombre;
    this.#sueldoBase=sueldoBase;
  }
  get nombre(){
    return this.#nombre;
  }
  get sueldoBase(){
    return this.#sueldoBase;
  }
}
class Programador extends Empleado{
  #lenguaje;
  constructor(nombre, sueldoBase, lenguaje){
    super(nombre,sueldoBase);
    this.#lenguaje=lenguaje;
  }
  calcularSueldo(){
    return this.sueldoBase*1.1;
  }
}
class ProgramadorSenior extends Programador{
  constructor(nombre, sueldoBase, lenguaje){
    super(nombre,sueldoBase,lenguaje);
  }
  calcularSueldo(){
    return super.calcularSueldo()*(1.25/1.1);
  }
}
let p1=new Programador("Juan", 10_000, "JavaScrip");
let p2=new ProgramadorSenior("Kevin", 20_000, "Java");
console.log(p1.calcularSueldo());
console.log(p2.calcularSueldo());