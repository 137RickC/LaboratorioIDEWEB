function generarContraña(){
    let arr=[];
    for(let i=0;i<6;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    console.log("Contraseña gnerada: "+arr.join(""));
}
generarContraña();
