import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Producto } from 'src/model/Producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto
  id: number

  constructor(private arenalesService: ArenalesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
    this.arenalesService.getProducto(this.id).subscribe(producto => this.producto = producto)
  }

  gotoTienda() {
    this.router.navigate(['/tienda/' + this.producto.tienda.tiendaID.toString()])
  }

  gotoPedido() {
    this.router.navigate(['/pedido/' + this.producto.productoID])
  }
}
