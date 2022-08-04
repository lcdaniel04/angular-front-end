import { Injectable } from '@angular/core';
import { SesionService } from './sesion.service';
import { OperacionService } from './operacion-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralService extends OperacionService {

  constructor(public http: HttpClient) {
    super(http);
  }

}
