import { OperacionService } from './operacion-service';

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CategoriaService  extends OperacionService {

   /**
   *
   * @param http
   */
  constructor(public http: HttpClient) {
    super(http);
  }


}
