let auto = {
    marca: "Subaru",
    modelo: "xz3",
    año: 2017,

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    },
};
auto.detalles();