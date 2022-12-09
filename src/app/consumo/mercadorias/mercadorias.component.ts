import { GruposService } from 'src/app/services/grupos.service';
import { MercadoriasService } from './mercadorias.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})

export class MercadoriasComponent implements OnInit {
  idhashMesa:any;
  idhashGrupo:any;
  wrapperMesa:any;
  wrapperMercadorias:any;
  wrapperGrupo:any;

  constructor(private activatedRoute: ActivatedRoute,
    private serviceMesa:MesaService,
    private serviceMercadorias:MercadoriasService,
    private serviceGrupo:GruposService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idhashMesa = params['idMesa'];
      this.idhashGrupo = params['idGrupo'];

    })

    this.getMesa()

    this.getGrupoMercadorias()

    this.getGrupo()

  }

  getMesa() {
    this.serviceMesa.getMesa(this.idhashMesa).subscribe(response => {
      this.wrapperMesa = response;
    })
  }

  getGrupoMercadorias(){
    this.serviceMercadorias.getGrupoMercadorias(this.idhashGrupo).subscribe(response => {
      this.wrapperMercadorias = response;
    })
  }

  getGrupo() {
    this.serviceGrupo.getGrupo(this.idhashGrupo).subscribe(response => {
      this.wrapperGrupo = response;
    })
  }
}
