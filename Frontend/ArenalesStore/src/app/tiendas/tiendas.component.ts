import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  page = 1
  n = 5
  tiendas = []
  estadoPrevPag = 'disabled'

  constructor(private arenalesService: ArenalesService, private router: Router) { }

  ngOnInit() {
    this.getTiendas()
  }

  getTiendas() {
    this.tiendas = this.arenalesService.getPageTiendas(this.n, this.page)
  }

  goPrev() {
    --this.page
    this.getTiendas();
    this.checkPrevPag()
    return false;
  }

  goNext() {
    ++this.page
    this.getTiendas();
    this.checkPrevPag()
    return false;
  }

  checkPrevPag() {
    if (this.page === 1) this.estadoPrevPag = 'disabled'
    else this.estadoPrevPag = 'enabled'
  }

  gotoTienda(tienda: any) {
    this.router.navigate(['/tienda/' + tienda.tiendaID.toString()])
  }
}
