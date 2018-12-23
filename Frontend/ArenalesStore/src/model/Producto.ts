import { Tienda } from "./Tienda";

export class Producto {
    productoID: number;
    nombre: string;
    descripcion: string;
    nEstrellas: number;
    precio: number;
    origen: number;
    tienda: Tienda;
}