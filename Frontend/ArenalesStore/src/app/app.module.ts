import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CookieService } from 'ngx-cookie-service';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent,
    TiendaComponent,
    AppComponent,
    ProductosComponent,
    TiendasComponent,
    BusquedaComponent,
    LoginComponent,
    PerfilComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
