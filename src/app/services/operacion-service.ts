import { Util } from 'src/app/utils/util';

import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { SesionService } from './sesion.service';

export class OperacionService {

  list$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(public http: HttpClient) {
  }

  getList$() {
    return this.list$.asObservable();
  }

  addAll$(datas: any){
    this.list$.next(datas);
  }

  getAll(
    url: string,
    buscar: string,
    data: any
  ): Observable<any> {
    const params = new HttpParams();
    return this.http
      .get<any[]>(Util.apiUrl + url)
  }

  getParametro(
    url: string,
    buscar: string
  ): Observable<any> {
    const params = new HttpParams({
      fromString:buscar
    });
    return this.http
      .get<any[]>(Util.apiUrl + url, {
        params,
        responseType: 'json',
      })
  }

  get(
    url: string,
    buscar: string,
    data: any
  ): Observable<any> {
    const params = new HttpParams({
      fromString:'buscar=' + buscar + '&data=' + data
    });
    return this.http
      .get<any[]>(Util.apiUrl + url, {
        params,
        responseType: 'json',
      })
  }

  getPage(
    url: string,
    page: number,
    buscar: string,
    data: any,
  ): Observable<any> {
    const params = new HttpParams({
      fromString:
        page > 0
          ? 'page=' + page + '&buscar=' + buscar + '&data=' + data
          : 'buscar=' + buscar + '&data=' + data,
    });
    return this.http
      .get<any[]>(Util.apiUrl + url, {
        params,
        responseType: 'json',
      });
  }

  getPageToken(
    url: string,
    page: number,
    buscar: string,
    data: any,
    token: string
  ): Observable<any> {
    const params = new HttpParams({
      fromString:
      page > 0
        ? 'page=' + page + '&buscar=' + buscar + '&data=' + data
        : 'buscar=' + buscar + '&data=' + data,
    });
    return this.http
      .get<any[]>(Util.apiUrl + url, {
        headers: Util.getHttpOptionsGet(token),
        params,
        responseType: 'json',
      })
  }

  getToken(
    url: string,
    buscar: string,
    data: any,
    token: string
  ): Observable<any> {
    const params = new HttpParams({
      fromString:'buscar=' + buscar + '&data=' + data
    });
    return this.http
      .get<any[]>(Util.apiUrl + url, {
        headers: Util.getHttpOptionsGet(token),
        params,
        responseType: 'json',
      })
  }



  postToken(url:string , data: any , token: string): Observable<any> {
    return this.http
      .post<any>(
        Util.apiUrl + url,
        data,
        Util.getHttpOptionsPost(token)
      );
  }

  post(url: string , data: any): Observable<any> {
    return this.http
      .post<any>(Util.apiUrl + url, data,
        Util.httpOptions
      );
  }

  postMonday( data: any): Observable<any> {
    return this.http
      .post<any>('https://api.monday.com/v2', data,
        Util.httpOptionsPostMonday
      );
  }

  registrarMultimedia(data: any, url: string, token: string): Observable<any> {
    const req = new HttpRequest('POST',Util.apiUrl + url, data, {
      reportProgress: true,
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      })
    });
    return this.http.request(req);
  }



}
