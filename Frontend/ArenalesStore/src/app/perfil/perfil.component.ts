import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Usuario } from 'src/model/Usuario';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  _user: Usuario


  public get user(): Usuario {
    return this.arenalesService.user
  }

  constructor(private arenalesService: ArenalesService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  gotoLogout(){
    this.cookieService.delete('usuario')
    this.arenalesService.user = null
    this.router.navigate(['/home'])
    return false
  }

}
