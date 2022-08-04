import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { Usuario } from './../model/usuario';
import { Util } from './../utils/util';
import { Producto } from './../model/producto';
import { ProductoService } from './../services/producto.service';
import { CategoriaService } from './../services/categoria.service';
import { Category } from '../model/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-market',
  templateUrl: './tienda-market.component.html',
  styleUrls: ['./tienda-market.component.css']
})
export class TiendaMarketComponent implements OnInit {
  carrito=false;
  categorias:Category[] = [];
  categoria: Category = new Category();
  cantidad = 0;
  usuario?: Usuario = new Usuario();
  productos: Producto[ ] = []
  constructor(public categoriaService: CategoriaService,public productoService: ProductoService, public sesion: SesionService,
    private router: Router) {
    this.usuario = sesion.user();
    this.consultarProductos("1");
  }

  ngOnInit() {
    this.productoService.get$().subscribe((data: Producto[])=>{
      this.cantidad = 0;
      for (const element of data) {
        if(!Util.empty(element.cantidad) && element.cantidad > 0){
           this.cantidad+=element.cantidad;
        }
      }
    });
    this.consultarCategorias();
  }

  consultarCategorias(){
    this.categoriaService.getAll('product/categorys',"",null).subscribe(
      data=>{
        this.categorias = data;
      }
    );
  }

  redireccionar(categoria: Category){
    this.router.navigate(["content/productos",categoria.categoryId]);
  }

  consultarProductos(id: string){
    this.productoService.getParametro('product/category/'+id,'').subscribe(data=>{
      this.productos = data;
    });
  }

  salir(){
    this.productoService.add$([]);
    this.sesion.clear();
    this.router.navigate(["/"]);
  }

}
