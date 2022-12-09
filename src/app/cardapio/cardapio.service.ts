import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly API = 'http://192.168.0.7:8088/api/v1/Cardapio';



  constructor(private httpClient:HttpClient) {

  }

  getCardapio() {
    return this.httpClient.get(this.API);
  }
}
