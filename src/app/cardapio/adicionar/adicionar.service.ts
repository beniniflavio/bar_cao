import { Injectable } from '@angular/core';
import { CardapioCustomData } from './../../model/CardapioCustomData';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AdicionarService {
  idHashGrupo: any;

  cardapioCustomData? :CardapioCustomData;

  private status:any;

  private readonly API = 'http://192.168.0.172:8081/api/v1/Cardapio/Adicionar/';

  private readonly APISetCardapio = 'http://192.168.0.172:8081/api/v1/Cardapio/Adicionar/';

  private readonly APICardapio = 'http://192.168.0.172:8081/api/v1/Cardapio/getAdicionar/';


  constructor(private httpClient: HttpClient) {}

  getMercadorias(idHashGrupo: String) {
    if (idHashGrupo.trim() == '') {
      return this.httpClient.get(this.API + 'Todos');
    } else {
      return this.httpClient.get(this.API + idHashGrupo);
    }
  }


  getCardapioItem(idhash : String){
    return this.httpClient.get(this.APICardapio+idhash);
  }


  setAdicionar(idhash : String, checked : String) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };


    this.httpClient.post<any> (this.APISetCardapio, {id : idhash, checked: checked  }, httpOptions).subscribe(result =>{
      this.status = result;

    })


    return this.status;

  }
}
