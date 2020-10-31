console.log(productos)

const monstrarMenu = () => {
    console.log("CODIGO - NOMBRE DEL PRODUCTO - COSTO")
    productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} -- $${producto.costo} `))
}