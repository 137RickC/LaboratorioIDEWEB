function gestionarEmpleados(empleados) {
    // Crear un Map para agrupar por área
    let mapa = new Map();

    for (let emp of empleados) {
        // Si el área aún no está en el mapa, se crea
        if (!mapa.has(emp.area)) {
            mapa.set(emp.area, { empleados: [], totalSalario: 0 });
        }

        // Obtener los datos actuales del área
        let datos = mapa.get(emp.area);
        datos.empleados.push(emp.nombre);
        datos.totalSalario += emp.salario;
    }

    // Construir el objeto final con promedios
    let resultado = {};
    for (let [area, datos] of mapa) {
        let promedio = datos.totalSalario / datos.empleados.length;
        resultado[area] = {
            empleados: datos.empleados,
            promedio: parseFloat(promedio.toFixed(2))
        };
    }

    return resultado;
}

// Ejemplo de uso
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));