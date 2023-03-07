import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/model/data/ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  baseURL: string = "http://192.168.0.172:8081/api/v1/Cardapio/Ticket";

  status:any;

  constructor(private httpClient: HttpClient) {

  }

  addTickerData( ticket: FormGroup ){

    /*const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(ticket.value);


    this.http.post(this.baseURL, body,{'headers':headers})
    .subscribe((r) =>{
      this.res =r;
    });*/

    const body= JSON.stringify(ticket.value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post<any> (this.baseURL, body, httpOptions);


    return this.status;

  }
}



