import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  id:any;
  wrapper: any;
  wrapperMesa :any;
  constructor(private activatedRoute: ActivatedRoute,
     private service: GruposService,
     private serviceMesa:MesaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getMesa(this.id);
    this.getGrupos();
  }

  getMesa(idHash:string) {
    this.serviceMesa.getMesa(this.id).subscribe(response => {
      this.wrapperMesa = response;
    })
  }


  getGrupos():void {
    this.service.getGrupos().subscribe(response =>{
      this.wrapper = response;
      })
  }
}
