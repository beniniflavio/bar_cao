import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  private readonly API = 'http://192.168.0.172:8081/api/v1/Movimento/Aberto';

  constructor(private  httpClient: HttpClient) { }

  getMovimentoAberto() {


    return this.httpClient.get(this.API);

  }
}
