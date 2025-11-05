class Cuenta{
  #saldo;
  #limiteSobregiro;
  constructor(saldo,limiteSobregiro=0){
    this.#saldo=saldo>=0?saldo:0;
    this.#limiteSobregiro=limiteSobregiro;
  }
  get saldo(){
    return this.#saldo;
  }
  get limiteSobregiro(){
    return this.#limiteSobregiro;
  }
  depositar(monto){
    if(monto>0){
      this.#saldo+=monto;
      console.log("Deposito exitoso");
    }else{
      console.log("El deposito no puede ser negativo");
    }
  }
  retirar(monto, limiteSobregiro=0){
    if(0<monto&&monto<=this.#saldo+this.#limiteSobregiro){
      this.#saldo-=monto;
      console.log("Retiro exitoso");
    }else{
      console.log("Fondos insuficientes");
    }
  }
  transferencia(monto,cuenta){
    this.retirar(monto);
    cuenta.depositar(monto);
  }
}
class CuentaAhorro extends Cuenta{
  constructor(saldo){
    super(saldo);
  }
}
class CuentaCorriente extends Cuenta{
  constructor(saldo){
    super(saldo,200);
  }
}
let cuenta1=new CuentaAhorro(200);
let cuenta2=new CuentaCorriente(200);
console.log(`Cuenta 1: S/.${cuenta1.saldo}\nCuenta 2: S/.${cuenta2.saldo}`);
  cuenta1.retirar(300);
  cuenta2.retirar(400);
  console.log(`Cuenta 1: S/.${cuenta1.saldo}\nCuenta 2: S/.${cuenta2.saldo}`);
