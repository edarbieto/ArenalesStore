import { Producto } from "./Producto";

export class Tienda {
    tiendaID: number;
    nombre: string;
    descripcion: string;
    nEstrellas: number;
    productos: Producto[];
}