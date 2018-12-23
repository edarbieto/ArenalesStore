import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/model/Usuario';
import { ArenalesService } from '../arenales.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activePage = 0
  _user: Usuario


  public get user(): Usuario {
    return this.arenalesService.user
  }

  constructor(private router: Router, private arenalesService: ArenalesService) { }

  ngOnInit() {
  }

  gotoTiendas() {
    this.router.navigate(['/tiendas'])
    this.activePage = 1
    return false;
  }

  gotoProductos() {
    this.router.navigate(['/productos'])
    this.activePage = 2
    return false;
  }

  gotoHome() {
    this.router.navigate(['/home'])
    this.activePage = 3
    return false;
  }

  gotoLogin() {
    if (this.user === null) {
      this.router.navigate(['/login'])
      this.activePage = 3
      return false;
    } else {
      this.router.navigate(['/perfil'])
      this.activePage = 3
      return false;
    }
  }

}
