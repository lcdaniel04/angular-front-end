import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../model/producto';
import { SesionService } from './../../services/sesion.service';
import { Usuario } from './../../model/usuario';
import { Purchase } from './../../model/purchase';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos:Purchase[]=[];
  usuario: Usuario;
  productos: Producto[]= [];
  constructor(private pedidoService: PedidoService, private sesion: SesionService,private  productoService:ProductoService) {
    this.usuario = sesion.user();
   }

  ngOnInit() {
    this.cosultarProductos();
  }

  cosultarPedidos(){
    this.pedidoService.getParametro('purchases/client/'+this.usuario.id,"").subscribe(pedidos=>{
      this.pedidos=pedidos;
    });
  }

  cosultarProductos(){
    this.pedidoService.getParametro("product/all/","").subscribe(productos=>{
      this.productos=productos;
      this.cosultarPedidos();
    });
  }

  getProducto(id:any){
    for (const producto of this.productos) {
      if(producto.productId == id){
        return producto;
      }
    }
  }

}
