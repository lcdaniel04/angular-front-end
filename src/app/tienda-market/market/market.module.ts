import { PedidosComponent } from './../pedidos/pedidos.component';
import { CarritoComponent } from './../carrito/carrito.component';
import { ProductoService } from './../../services/producto.service';
import { CategoriaService } from './../../services/categoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SesionService } from 'src/app/services/sesion.service';
import { TiendaMarketComponent } from './../tienda-market.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from '../productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { routes } from './market-route/routes';



@NgModule({
  declarations: [
    TiendaMarketComponent,
    ProductosComponent,
    CarritoComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [
    SesionService,
    UsuarioService,
    CategoriaService,
    ProductoService],
})
export class MarketModule { }
