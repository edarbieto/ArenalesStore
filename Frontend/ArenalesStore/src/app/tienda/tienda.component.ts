import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/model/Tienda';
import { ArenalesService } from '../arenales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  tienda: Tienda
  id: number

  constructor(private arenalesService: ArenalesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
    this.arenalesService.getTienda(this.id).subscribe(tienda => this.tienda = tienda)
  }

  gotoProducto(producto: any) {
    this.router.navigate(['/producto/' + producto.productoID.toString()])
  }
}
