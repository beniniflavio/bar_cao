import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private readonly API = 'http://192.168.0.172:8081/api/v1/Mesa/';

  private readonly APIMesa = 'http://192.168.0.172:8081/api/v1/Mesa/Get/';
  constructor(private  httpClient: HttpClient) { }

  getMesa(idhash :string) {
    return this.httpClient.get(this.API+idhash);
  }

  getMesaDetalhe(idhash :string) {
    return this.httpClient.get(this.APIMesa+idhash);
  }

  getMesas() {
    return this.httpClient.get(this.API);
  }


}
