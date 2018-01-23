import { Injectable } from '@angular/core';
import { Unidade } from './unidade';
import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UnidadeService {

  
  private customersUrl = 'http://localhost:54748/api/Unidades';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

   constructor(private http: Http) { }
  
   // Get all unidades
   getUnidade(): Observable<Unidade[]>  {
    return this.http.get(this.customersUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  
  getUnidadeById(id: number): Promise<Unidade> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Unidade)
      .catch(this.handleError);
  }
  

   create(unidade: Unidade): Promise<Unidade> {
    return this.http
      .post(this.customersUrl, JSON.stringify(unidade), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Unidade)
      .catch(this.handleError);
  }
 
  update(unidade: Unidade): Promise<Unidade> {
    const url = `${this.customersUrl}/${unidade.UnidadeId}`;
    return this.http
      .put(url, JSON.stringify(unidade), {headers: this.headers})
      .toPromise()
      .then(() => unidade)
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
