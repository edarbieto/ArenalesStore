import { Compra } from "./Compra";

export class Usuario {
    usuarioID: number
    username: string
    password: string
    nickname: string
    compras: Compra[]
}