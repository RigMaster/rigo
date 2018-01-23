import { InsertCausa } from './insert-causa';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CausaService {

  
  private userUrl = 'http://localhost:54748/api/Causas';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  create(cause: InsertCausa): Promise<InsertCausa> {
    return this.http
      .post(this.userUrl, JSON.stringify(cause), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as InsertCausa)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // to be bettered
    return Promise.reject(error.message || error);
  }

}
