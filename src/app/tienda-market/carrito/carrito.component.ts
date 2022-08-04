import { PedidoService } from './../../services/pedido.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { Producto } from './../../model/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  visible = false;
  productos: Producto [] = [];
  constructor(
    private productoService:ProductoService,
    private sesion: SesionService,
    private router: Router,
    private pedidoService: PedidoService
    ) { }

  ngOnInit() {
    this.consultarPedidoProductos();
  }
  consultarPedidoProductos(){
    this.productoService.get$().subscribe((productos:Producto[])=>{
      this.productos = productos;
    });
  }
  disminuirAumentar(producto : Producto, aumentar: boolean, i: number){
    let cero = false;
    for (const element of this.productos) {
      if(element.productId == producto.productId){
        if(aumentar){
          element.cantidad += 1;
        }else{
          element.cantidad -= 1;
        }

        element.total = element.price * element.cantidad;
        producto.total =producto.price * producto.cantidad;
        cero = element.cantidad == 0;
        break;
      }
    }
    if(cero){
      this.productos.splice(i,1);
    }

    this.productoService.add$(this.productos);
    this.sesion.set('productos',this.productos);
  }

  total(){
    let valor = 0;
      for (const element of this.productos) {
          valor+= element.price * element.cantidad;
      }
      return valor;
  }

  pagar(){
    this.visible=true;
    const pedido = {
      usuario: this.sesion.user(),
      productos: this.productos,
      total:this.total()
    };
    console.log(pedido);
    this.pedidoService.post("purchases/order",pedido).subscribe((data)=>{
      this.vaciar();
      this.visible=false;
    },error=>{
      this.visible = false;
    });
  }

  vaciar(){
    this.productos = [];
    this.productoService.add$(this.productos);
    this.sesion.set('productos',this.productos);
    this.router.navigate(["/"]);
  }
}
