import { Injectable } from '@angular/core';
import { Ocorrencia } from './ocorrencia';
import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OcorrenciaService {

  
  private customersUrl = 'http://localhost:54748/api/Ocorrencias';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

   constructor(private http: Http) { }
  
   // Get all Events
   getOcorrencia(): Observable<Ocorrencia[]>  {
    return this.http.get(this.customersUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  
  getOcorrenciaById(id: number): Promise<Ocorrencia> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Ocorrencia)
      .catch(this.handleError);
  }
  

   create(ocorrencia: Ocorrencia): Promise<Ocorrencia> {
    return this.http
      .post(this.customersUrl, JSON.stringify(ocorrencia), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Ocorrencia)
      .catch(this.handleError);
  }
 
  update(ocorrencia: Ocorrencia): Promise<Ocorrencia> {
    const url = `${this.customersUrl}/${ocorrencia.OcorrenciaId}`;
    return this.http
      .put(url, JSON.stringify(ocorrencia), {headers: this.headers})
      .toPromise()
      .then(() => ocorrencia)
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
     console.error('Error', error); // To be Changed for better throwing
     return Promise.reject(error.message || error);
   }

}
