import { Usuario } from './../../model/usuario';
import { Util } from './../../utils/util';
import { SesionService } from 'src/app/services/sesion.service';
import { Producto } from './../../model/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input()id: string="";
  @Input()productos: Producto[] = [];
  productosPedidos: Producto[] = [];
  usuario:Usuario=new Usuario();
  constructor(public productoService:ProductoService,  private route: ActivatedRoute,public sesion:SesionService) {


    this.productosPedidos = this.sesion.get('productos');
    if(!Util.empty(this.productosPedidos) && this.productosPedidos.length > 0){
      this.productoService.add$(this.productosPedidos);
    }
    this.usuario = sesion.user();
   }

  ngOnInit(): void {

    this.consultarPedidoProductos();
  }

  consultarPedidoProductos(){
    this.productoService.get$().subscribe((productos:Producto[])=>{
      this.productosPedidos = productos;
    });
  }

  agregarproducto(producto: Producto){
    if(Util.empty(producto.cantidad)){
      producto.cantidad = 1;
      producto.total = producto.price;
    }

    if(!this.existeProducto(producto)){
      this.productosPedidos.push(producto);
    }

    this.productoService.add$(this.productosPedidos);
    this.sesion.set('productos',this.productosPedidos);
  }

  existeProducto(producto: Producto){
    for (const element of this.productosPedidos) {
      if(element.productId == producto.productId){
        element.cantidad += 1;
        element.total =element.price * element.cantidad;
        element.stock -= 1;
        return true;
      }
    }
    return false;
  }

}
