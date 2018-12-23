import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Router } from '@angular/router';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  page = 1
  n = 5
  productos = []
  estadoPrevPag = 'disabled'

  constructor(private arenalesService: ArenalesService, private router: Router) { }

  ngOnInit() {
    this.getProductos()
  }

  getProductos() {
    this.productos = this.arenalesService.getPageProductos(this.n, this.page)
  }

  goPrev() {
    --this.page
    this.getProductos();
    this.checkPrevPag()
    return false;
  }

  goNext() {
    ++this.page
    this.getProductos();
    this.checkPrevPag()
    return false;
  }

  checkPrevPag() {
    if (this.page === 1) this.estadoPrevPag = 'disabled'
    else this.estadoPrevPag = 'enabled'
  }

  gotoProducto(producto: any) {
    this.router.navigate(['/producto/' + producto.productoID.toString()])
  }

}
