const productos = [
    {
        nombre: "Hamburguesa simpe",
        costo: 20,
        codigo: "H100"
    }, 
    {
        nombre: "Hamburguesa doble",
        costo: 30,
        codigo: "H200"
    },
    {
        nombre: "Papas fritas",
        costo: 8,
        codigo: "P100"
    },
    {
        nombre: "Refresco personal",
        costo: 6,
        codigo: "R100"
    }
]

const monstrarMenu = () => {
    console.log("CODIGO - NOMBRE DEL PRODUCTO - COSTO")
    productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} -- $${producto.costo} `))
}