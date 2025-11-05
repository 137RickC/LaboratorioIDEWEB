function gradosARadianes(grado) {
    const enRadianes = grado * (Math.PI / 180);
    const sen = Math.sin(enRadianes);
    const cos = Math.cos(enRadianes);
    
    console.log(`El número en radianes es ${enRadianes}`);
    console.log(`Seno(${grado}°) = ${sen}`);
    console.log(`Coseno(${grado}°) = ${cos}`);
}

function radianesAGrados(radianes) {
    const enGrados = radianes * (180 / Math.PI);
    const sen = Math.sin(radianes);
    const cos = Math.cos(radianes);
    
    console.log(`El número en grados es ${enGrados}`);
    console.log(`Seno(${radianes} rad) = ${sen}`);
    console.log(`Coseno(${radianes} rad) = ${cos}`);
}
gradosARadianes(53);
radianesAGrados(Math.PI);
