import { PedidoService } from './services/pedido.service';
import { MarketModule } from './tienda-market/market/market.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { SesionService } from './services/sesion.service';
import { UsuarioService } from './services/usuario.service';
import { ProductosComponent } from './tienda-market/productos/productos.component';
import { TiendaMarketComponent } from './tienda-market/tienda-market.component';
import {routes} from './routes';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    MaterialModule,
    MarketModule
  ],
  providers: [
    SesionService,
    UsuarioService,
    CategoriaService,
    ProductoService,
  PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
