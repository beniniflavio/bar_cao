import { MesaService } from './../services/mesa.service';
import { ConsumoService } from './consumo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {
  idhash: any;
  page:any;

  wrapperConsumo: any;
  constructor(private service: ConsumoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idhash = params['id'];
    })

    this.service.getConsumoMesa(this.idhash).subscribe(response => {
      this.wrapperConsumo = response;
    })
  }

}
