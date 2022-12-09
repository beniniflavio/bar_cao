import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalheService {

<<<<<<< HEAD
  private readonly API = 'http://192.168.0.7:8088/api/v1/Consumo/';
  private readonly ApiAtualizaConsumo = 'http://192.168.0.7:8088/api/v1/Consumo/Update';
=======
  private readonly API = 'http://192.168.0.172:8088/api/v1/Consumo/';
  private readonly ApiAtualizaConsumo = 'http://192.168.0.172:8088/api/v1/Consumo/Update';
>>>>>>> cbf1dc2bf9b2b1847221c1e1a9585ad612c507dd

  constructor(private  httpClient: HttpClient) { }

  getConsumoDetalhe(idhash:string) {
    return this.httpClient.get(this.API+idhash);
  }

  setConsumo(data:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post<any> (this.ApiAtualizaConsumo, data, httpOptions).subscribe(result =>{
        console.log(result)
      })

  }
}
