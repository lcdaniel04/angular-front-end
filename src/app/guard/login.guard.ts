import { Usuario } from './../model/usuario';
import { SesionService } from 'src/app/services/sesion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Util } from 'src/app/utils/util';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private sesion:SesionService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuario:Usuario  = this.sesion.user();
     if (!Util.empty(this.sesion.user())) {
      this.router.navigate(["market"]);
      return false;
    }
    return true;
  }

}
