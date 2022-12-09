import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadoriasService {

  private readonly API = 'http://192.168.0.7:8088/api/v1/Consumo/Grupo/Mercadorias/';

  constructor(private  httpClient:HttpClient) { }

  getGrupoMercadorias(idhash: string) {
    return this.httpClient.get(this.API +idhash);
  }

}
