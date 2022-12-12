import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {


  private readonly API = 'http://192.168.0.7:8088/api/v1/Consumo/Mesa/';

  constructor(private  httpClient: HttpClient) {}

  getConsumoMesa(idhash:string) {
    return this.httpClient.get(this.API+idhash);
  }

}
