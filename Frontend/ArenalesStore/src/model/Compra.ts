import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export class Compra {
    compraID: number
    producto: Producto
    usuario: Usuario
    fechaCompra: Date
    fechaEntrega: Date
    cantidad: number
}