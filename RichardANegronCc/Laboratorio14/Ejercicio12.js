class Usuario{
  #nombre;
  #email;
  constructor(nombre,email){
    this.#nombre=nombre;
    this.#email=email;
  }
  mostrarInfo(){
    return `Nombre: ${this.#nombre}, Email: ${this.#email}`;
  }
}
class Cliente extends Usuario{
  #fidelidad;
  constructor(nombre,email,fidelidad){
    super(nombre,email);
    this.#fidelidad=fidelidad;
  }
  set fidelidad(item){
    this.#fidelidad=1<=item&&item<=5?item:null;
  }
  mostrarInfo(){
    return `${super.mostrarInfo()}, Fidelidad: ${this.#fidelidad}`;
  }
}
class Administrador extends Usuario{
  #permisos;
  constructor(nombre,email,permisos=[]){
    super(nombre,email,permisos);
    this.#permisos=permisos;
  }
  mostrarInfo(){
    return `${super.mostrarInfo()}, Permisos: ${this.#permisos.join(", ")}`;
  }
}
let cliente1=new Cliente("Richard", "rnegron@unsa.edu.pe", 3);
console.log(cliente1.mostrarInfo());  
let admin1 = new Administrador("Pedro", "ppedro@unsa.edu.pe", ["crear","editar","eliminar"]);
console.log(admin1.mostrarInfo());