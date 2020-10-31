const usuario = {
    nombre: "Angel",
    edad: 26,
    deuda: 0
}

let pedido = []
let costoPedido = 0

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
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () =>{
    let costoU = 0
    for(producto of pedido){
        costoU += producto.costo
    }
    return costoPedido=costoU
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar ${usuario.deuda} dolares`
}