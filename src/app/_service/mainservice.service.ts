import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  constructor(private http: HttpClient,) {
 
  }
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  
  });
  public postRequest(url: any, params: any): Observable<any> {
      return this.http.post(url, params, {headers: this.headers});
  }
  public getRequest(data:any): Observable<any> {
    return this.http.get(data);
}
}
