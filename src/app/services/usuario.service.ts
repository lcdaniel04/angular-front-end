import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { OperacionService } from './operacion-service';
@Injectable()
export class UsuarioService extends OperacionService {
  usuario$ = new BehaviorSubject<Usuario>(new Usuario());

  constructor(public http: HttpClient) {
    super(http);
  }

  add$(usuario: Usuario ) {
    this.usuario$.next(usuario);
  }
  get$(): Observable<Usuario> {

    return this.usuario$.asObservable();
  }

}
