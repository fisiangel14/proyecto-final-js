const usuario = {
    nombre: "Angel",
    edad: 26,
    deuda: 0
}

const pedido = []

const monstrarMenu = () => {
    console.log("CODIGO - NOMBRE DEL PRODUCTO - COSTO")
    productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} -- $${producto.costo} `))
}

const pedirProducto = cod => {
    if(!cod || typeof cod !== "string" ) return "Ingrese un codigo valido!"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    
    if(!productoEncontrado) return "El producto no existe!!!"

    pedido.push(productoEncontrado)
    console.log("Su producto fue agregado correctamente")
    return pedido
}