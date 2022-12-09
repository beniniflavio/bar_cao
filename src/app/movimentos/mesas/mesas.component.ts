import { MesasService } from './mesas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  wrapper: any;
  constructor(private service: MesasService) { }

  ngOnInit(): void {
    this.getMesas() ;
  }

  getMesas() :void {
    this.service.getMesas().subscribe(response => {
      console.log(response);
      this.wrapper = response
    })

  }

}
