import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
<<<<<<< HEAD
  private readonly API = 'http://192.168.0.7:8088/api/v1/Mesa';
=======
  private readonly API = 'http://192.168.0.172:8088/api/v1/Mesa';
>>>>>>> cbf1dc2bf9b2b1847221c1e1a9585ad612c507dd

  constructor(private  httpClient: HttpClient) { }

  getMesas() {
    return this.httpClient.get(this.API);
  }
}
