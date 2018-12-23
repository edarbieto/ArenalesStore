import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/model/Producto';
import { Tienda } from 'src/model/Tienda';
import { Usuario } from 'src/model/Usuario';
import { CookieService } from 'ngx-cookie-service';
import { Compra } from 'src/model/Compra';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArenalesService {

  private _user: Usuario

  public get user(): Usuario {
    return this._user
  }

  public set user(v: Usuario) {
    this._user = v;

  }

  private productosUrl = 'https://localhost:44348/api/productos'
  private tiendasUrl = 'https://localhost:44348/api/tiendas'
  private usuariosUrl = 'https://localhost:44348/api/usuarios'
  private comprassUrl = 'https://localhost:44348/api/compras'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    var cookie = this.cookieService.get('usuario').toString()
    if (cookie === '' || cookie === 'null') {
      this._user = null
    } else {
      this._user = JSON.parse(cookie)
    }
  }

  getPageProductos(n: number, page: number): Producto[] {
    var productos = []

    var start = n * (page - 1) + 1
    var end = start + n

    for (var i = start; i < end; ++i) {
      this.http.get<Producto>(this.productosUrl + "/" + i.toString()).subscribe(producto => productos.push(producto))
    }

    return productos
  }

  getPageTiendas(n: number, page: number): Tienda[] {
    var tiendas = []

    var start = n * (page - 1) + 1
    var end = start + n

    for (var i = start; i < end; ++i) {
      this.http.get<Tienda>(this.tiendasUrl + "/" + i.toString()).subscribe(tienda => tiendas.push(tienda))
    }

    return tiendas
  }

  getProductosDelMes(): Producto[] {
    var sortedNumbers = []
    var productosDelMes = []
    while (sortedNumbers.length < 3) {
      var r = this.getRandomInt(1, 500)
      if (sortedNumbers.indexOf(r) === -1) {
        sortedNumbers.push(r)
        this.http.get<Producto>(this.productosUrl + "/" + r.toString()).subscribe(producto => productosDelMes.push(producto))
      }
    }

    return productosDelMes
  }

  getTiendasDelMes(): Tienda[] {
    var sortedNumbers = []
    var tiendasDelMes = []
    while (sortedNumbers.length < 3) {
      var r = this.getRandomInt(1, 20)
      if (sortedNumbers.indexOf(r) === -1) {
        sortedNumbers.push(r)
        this.http.get<Tienda>(this.tiendasUrl + "/" + r.toString()).subscribe(tienda => tiendasDelMes.push(tienda))
      }
    }

    return tiendasDelMes
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.productosUrl + "/" + id.toString())
  }

  getTienda(id: number): Observable<Tienda> {
    return this.http.get<Tienda>(this.tiendasUrl + "/" + id.toString())
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  loginTry(username: string, password: string): Observable<Usuario> {
    var usuarioLogin: Usuario = {
      username: username,
      password: password,
      nickname: '',
      usuarioID: 0,
      compras: null
    }
    return this.http.post<Usuario>(this.usuariosUrl + "/login", usuarioLogin, httpOptions)
  }

  registrarPedido(producto: Producto, cantidad: number) {
    var pedido = new Compra
    pedido.producto = producto
    pedido.usuario = this.user
    pedido.fechaCompra = new Date(Date.now())
    pedido.fechaEntrega = null
    pedido.cantidad = cantidad

    return this.http.post<Compra>(this.comprassUrl, pedido, httpOptions)
  }

  updateUsuario(): Observable<Usuario> {
    return this.loginTry(this.user.username, this.user.password)
  }
}
