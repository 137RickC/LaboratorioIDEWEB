class Notificacion{
  enviar(){}
}
class Email extends Notificacion{
  enviar(){
    return "Esto es una Email";
  }
}
class Sms extends Notificacion{
  enviar(){
    return "Esto es un SMS";
  }
}
class Push extends Notificacion{
  enviar(){
    return "Esto es un Push";
  }  
}
let arr=[new Email(), new Sms(), new Push()]
arr.forEach(item=>console.log(item.enviar()))