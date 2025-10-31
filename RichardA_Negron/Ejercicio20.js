function descargarArchivo(url, callback){
    console.log("Descargando...");
    callback(url);
}
let callback=(url)=>{console.log(`Descarga completa de ${url}`)};
descargarArchivo("https://ejemplo.com/archivo.pdf",callback)