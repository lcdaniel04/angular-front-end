import { Producto } from './../model/producto';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';


@Injectable({
  providedIn: 'root'
})
export class SesionService {
  usuario$ = new BehaviorSubject<Usuario>(new Usuario());
  constructor() {

  }

  set(key:string,producto:any[] ) {
    localStorage.setItem(key,JSON.stringify(producto));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  setUser(usuario: Usuario ) {
    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.usuario$.next(usuario);
  }


  user$(): Observable<Usuario> {
    return this.usuario$.asObservable();
  }


  user() {
    return JSON.parse(localStorage.getItem('usuario')!);
  }



  clear() {
    localStorage.clear();
  }






}
