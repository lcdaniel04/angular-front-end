import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export class Util {
  constructor() { }
  static APP_NAME = 'MerCampo';


  static redistribuir = ['1', '2', '3'];

  static apiUrl = 'http://app-back-end-carrito.herokuapp.com/tienda-market/api/';

  static webURL = 'http://app-back-end-carrito.herokuapp.com/';

  static apiUrlImage = 'http://app-back-end-carrito.herokuapp.com/archivos/';

  static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  static httpOptionsPostMonday = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0OTk0NDc0NywidWlkIjoyODc1MTQyNiwiaWFkIjoiMjAyMi0wMy0wOVQxODowODo1NC4xNjFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTE0OTgxODIsInJnbiI6InVzZTEifQ.14iyVPlMFHRqbXINrpupg-ZIj7vNK2EC26lWeeUHUPk',
    }),
  };

  static httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Barer ',
    }),
  };

  static getHttpOptionsPost(token: string) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return httpOptionsPost;
  }

  static getHttpOptionsGet(token: string) {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  static getHttpOptionsPostProgress(token: string) {
    const httpOptionsPost = {
      reportProgress: true,
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return httpOptionsPost;
  }

  static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  static openSnackBar(
    snackBar: MatSnackBar,
    message: string,
    opcion: number,
    position: MatSnackBarVerticalPosition
  ) {
    let snackbarClass = "";
    switch (opcion) {
      case 1:
        snackbarClass = 'snackbar-success';
        break;
      case 2:
        snackbarClass = 'snackbar-warning';
        break;
      case 3:
        snackbarClass = 'snackbar-danger';
        break;
    }

    snackBar.open(message, 'x', {
      duration: 5000,
      verticalPosition: position,
      panelClass: [snackbarClass],
    });
  }





  static openSnackBarCompenentDuration(  snackBar: MatSnackBar,component: any, opcion = 4, data: any, duration: number){
    let style ='snackbar-notification';

    snackBar.openFromComponent(component, {
      data: data,
      duration: duration * 1000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'end', //'start' | 'center' | 'end' |
      panelClass: [style],
    });
  }

  static openSnackBarDuration(
    snackBar: MatSnackBar,
    message: string,
    opcion: number,
    position: MatSnackBarVerticalPosition,
    duration: number
  ) {
    let snackbarClass ="";
    switch (opcion) {
      case 1:
        snackbarClass = 'snackbar-success';
        break;
      case 2:
        snackbarClass = 'snackbar-warning';
        break;
      case 3:
        snackbarClass = 'snackbar-danger';
        break;
    }

    snackBar.open(message, '', {
      duration,
      verticalPosition: position, // 'top' | 'bottom'
      panelClass: [snackbarClass],
    });
  }
  static emptyNumeric(data: any) {

    return (
      data === undefined ||
      data === null ||
      data === '' ||
      data === ' '
    );
  }



  static empty(data: any) {
    return (
      data === undefined ||
      data === null ||
      data === '' ||
      data === ' ' ||
      data === 0
    );
  }
  static emptyNaN(data: any) {
    return (
      data === undefined ||
      isNaN(+data) ||
      data === null ||
      data === '' ||
      data === ' ' ||
      data === 0
    );
  }

  static esMultiplo(numero: number, multiplo: number) {
    const resto = numero % multiplo;
    return resto === 0;
  }



  static esPar(numero: number) {
    return numero % 2 === 0;
  }


  static sortKeys(lista: any) {
    return Object.keys(lista).sort((a, b) => {
      return lista[a].prioridad > lista[b].prioridad
        ? 1
        : lista[a].prioridad < lista[b].prioridad
          ? -1
          : 0;
    });
  }

  convertirPorcentaje(numero: number, total: number) {
    return Math.round((numero * 100) / total);
  }

  static random(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  static getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  static convertirBlob64 = (blob: any) => new Promise((resolve, reject) => {
    const reader = Util.getFileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  static aproximarMiles(dato:number,base: number){
    const decimales = Math.pow(10,base);
    return Math.round(dato * decimales) / decimales;
  }
  static aproximarMilesInferior(dato:number,base: number){
    const decimales = Math.pow(10,base);

    return Math.round(dato * decimales) / decimales;
  }

  static aproximarMilSuperior(dato:number,base: number){
    const decimales = Math.pow(10,base);
    return Math.ceil(dato * decimales) / decimales;
  }

  static replaceCelular(valor: string){
    return parseInt(valor.replace(/[( )-]/g,''));
  }

  static emptyArray(data: any[]){
    return Util.empty(data) || (Array.isArray(data) && data.length === 0);
  }
}
