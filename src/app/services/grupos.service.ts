import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private readonly API = 'http://192.168.0.7:8088/api/v1/Grupo';

  private readonly APIGRUPO = 'http://192.168.0.7:8088/api/v1/Grupo/';

  constructor(private  httpClient:HttpClient) { }

  getGrupos() {
    return this.httpClient.get(this.API);
  }

  getGrupo(idhash: string) {
    return this.httpClient.get(this.APIGRUPO+idhash);

  }
}
