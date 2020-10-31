/**
 *  Logica para crear pedidos y cobrar los pedidos del usuario
 */
const usuario = {
    nombre: "Angel",
    edad: 26,
    deuda: 0
}

let pedido = []
let costoPedido = 0
let ventasTotales = 0

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
    ventasTotales += usuario.deuda
    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar ${usuario.deuda} dolares`
}

const pagarPedido = monto => {
    if (monto < usuario.deuda){
        return `No te alcanza para pagar tu pedido, te falta ${usuario.deuda - monto} dolares`
    }else if (monto === usuario.deuda){
        usuario.deuda = 0
        return "tu pedido ha sido pagado"
    }else{
        console.log(`Tu pedido ha sido pagado y tu cambio es ${monto - usuario.deuda}`)
        usuario.deuda = 0   //{}
        return "Deuda pagada"
    }
}

const reporteTotal = () => console.log(`Las ventas totales son: ${ventasTotales} dolares`)