import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './../model/producto';
import { OperacionService } from './operacion-service';

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProductoService  extends OperacionService {
  productos$ = new BehaviorSubject<Producto[]>([]);
   /**
   *
   * @param http
   */
  constructor(public http: HttpClient) {
    super(http);
  }
  add$(productos: Producto[]) {
    this.productos$.next(productos);
  }

  get$(): Observable<Producto[]> {
    return this.productos$.asObservable();
  }

}
