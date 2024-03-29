import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private readonly API = 'http://192.168.0.172:8081/api/v1/Mesa';

  constructor(private  httpClient: HttpClient) { }

  getMesas() {
    return this.httpClient.get(this.API);
  }
}
