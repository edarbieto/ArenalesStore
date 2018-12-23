import { Component, OnInit } from '@angular/core';
import { ArenalesService } from '../arenales.service';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string

  constructor(private arenalesService: ArenalesService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    if (this.arenalesService.user != null) {
      this.router.navigate(['/home'])
    }
  }

  login() {
    this.arenalesService.loginTry(this.username, this.password).subscribe(response => {

      this.cookieService.set('usuario', JSON.stringify(response))

      var cookie = this.cookieService.get('usuario').toString()
      if (cookie === '' || cookie === 'null'){
        this.arenalesService.user = null
        alert('Usuario o contraseña incorrecta')
        return false
      } else {
        this.arenalesService.user = JSON.parse(cookie)
        this.router.navigate(['/home'])
        return false
      }
    })
  }

}
