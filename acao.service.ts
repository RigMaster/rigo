import { InsertAcao } from './insert-acao'
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AcaoService {

   
  private userUrl = 'http://localhost:54748/api/Acaos';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  create(action: InsertAcao): Promise<InsertAcao> {
    return this.http
      .post(this.userUrl, JSON.stringify(action), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as InsertAcao)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
