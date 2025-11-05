function gestionarEmpleados(empleados) {
    let mapa = new Map();

    for (let emp of empleados) {
        if (!mapa.has(emp.area)) {
            mapa.set(emp.area, { empleados: [], total: 0, cantidad: 0 });
        }
        let datosArea = mapa.get(emp.area);
        datosArea.empleados.push(emp.nombre);
        datosArea.total += emp.salario;
        datosArea.cantidad += 1;
    }

    let resultado = {};
    for (let [area, datos] of mapa) {
        resultado[area] = {
            empleados: datos.empleados,
            promedio: parseFloat((datos.total / datos.cantidad).toFixed(2))
        };
    }
    return resultado;
}

const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];
console.log(gestionarEmpleados(listaEmpleados));
