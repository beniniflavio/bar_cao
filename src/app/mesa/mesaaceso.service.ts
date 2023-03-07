import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MesaAcesoService {

  baseURL: string = "http://192.168.0.172:8081/api/v1/Cardapio/Acesso";

  status:any;

  constructor(private httpClient:HttpClient) { }

  getAcesso(acesso: FormGroup) {
    const body= JSON.stringify(acesso.value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post<any> (this.baseURL, body, httpOptions);

    return this.status;
  }
}
