import { Injectable } from '@angular/core';
import { Terceiro } from './terceiro';
import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TerceiroService {

  
  private customersUrl = 'http://localhost:54748/api/Terceiros';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

   constructor(private http: Http) { }
  
   // Get all Terceros
   getTerceiro(): Observable<Terceiro[]>  {
    return this.http.get(this.customersUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  
  getTerceiroById(id: number): Promise<Terceiro> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Terceiro)
      .catch(this.handleError);
  }
  

   create(terceiro: Terceiro): Promise<Terceiro> {
    return this.http
      .post(this.customersUrl, JSON.stringify(terceiro), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Terceiro)
      .catch(this.handleError);
  }
 
  update(terceiro: Terceiro): Promise<Terceiro> {
    const url = `${this.customersUrl}/${terceiro.TerceiroId}`;
    return this.http
      .put(url, JSON.stringify(terceiro), {headers: this.headers})
      .toPromise()
      .then(() => terceiro)
      .catch(this.handleError);
  }
 
  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  
   private handleError(error: any): Promise<any> {
     console.error('Error', error); // to be bettered
     return Promise.reject(error.message || error);
   }

}
