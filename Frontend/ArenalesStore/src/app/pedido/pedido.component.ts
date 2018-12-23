import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  producto: Producto
  cantidad = 1

  constructor(private arenalesService: ArenalesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProducto()
  }

  getProducto() {
    this.arenalesService.getProducto(parseInt(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe(producto => this.producto = producto)
  }

  realizarPedido() {
    this.arenalesService.registrarPedido(this.producto, this.cantidad).subscribe(pedido => {
      this.arenalesService.updateUsuario().subscribe(user => {
        this.arenalesService.user = user
        this.router.navigate(['/perfil'])
      })
    })
  }

}
