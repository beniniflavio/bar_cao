import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsumoCustomData } from 'src/app/model/ConsumoCustomData';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {
<<<<<<< HEAD
  private readonly API = 'http://192.168.0.7:8088/api/v1/Mercadoria/';


  private readonly APIConsumo = 'http://192.168.0.7:8088/api/v1/Consumo/Get/';
  private readonly ApiInsertConsumo = 'http://192.168.0.7:8088/api/v1/Consumo/Insert';
=======
  private readonly API = 'http://192.168.0.172:8088/api/v1/Mercadoria/';


  private readonly APIConsumo = 'http://192.168.0.172:8088/api/v1/Consumo/Get/';
  private readonly ApiInsertConsumo = 'http://192.168.0.172:8088/api/v1/Consumo/Insert';
>>>>>>> cbf1dc2bf9b2b1847221c1e1a9585ad612c507dd

  status:any;

  constructor(private  httpClient:HttpClient) {
    
   }

  getMesaMercadoria(idhash:string) {
    return this.httpClient.get(this.API+idhash);
  }

  getConsumoMercadoria(idhashMesa :string, idhashMercadoria :string ) {
    return this.httpClient.get(this.APIConsumo+idhashMesa+"/"+ idhashMercadoria);
  }

  setConsumo(data:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };


    this.httpClient.post<any> (this.ApiInsertConsumo, data, httpOptions).subscribe(result =>{
      this.status = result;

    })


    return this.status;

  }



}
