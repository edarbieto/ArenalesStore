import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Producto } from 'src/model/Producto';
import { Tienda } from 'src/model/Tienda';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productosDelMes: Producto[]
  tiendasDelMes: Tienda[]

  constructor(private arenalesService: ArenalesService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.getProductosDelMes();
    this.getTiendaDelMes();
    if (this.cookieService.get('usuario').toString() === '' || this.cookieService.get('usuario').toString() == 'null') {

    }
  }

  getProductosDelMes() {
    this.productosDelMes = this.arenalesService.getProductosDelMes()
  }

  getTiendaDelMes() {
    this.tiendasDelMes = this.arenalesService.getTiendasDelMes()
  }

  gotoProducto(producto: any) {
    this.router.navigate(['/producto/' + producto.productoID.toString()])
  }

  gotoTienda(tienda: any) {
    this.router.navigate(['/tienda/' + tienda.tiendaID.toString()])
  }
}
