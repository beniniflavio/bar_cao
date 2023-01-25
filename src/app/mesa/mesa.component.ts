import { Component, OnInit } from '@angular/core';
import { MesaService } from '../services/mesa.service' ;
import { MesaAcesoService } from '../mesa/mesaaceso.service';
import { ActivatedRoute } from '@angular/router';
import { Acesso } from '../model/data/acesso';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})

export class MesaComponent implements OnInit {
  idMesaHash:any;
  success:any;

  formulario!: FormGroup;

  tipo:any;

  wrapperMesa:any;

  wrapperConsumo : any;

  constructor( private mesaService : MesaService,
    private activatedRoute: ActivatedRoute,
    private mesaaceso: MesaAcesoService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      this.idMesaHash = params['idMesa'];
    })
    this.createForm(new Acesso(), this.idMesaHash );
    this.success = 'acesso';
    this.getMesa(this.idMesaHash);

  }
  createForm(acesso :Acesso, idMesa :String) {
    acesso.IdMesa = idMesa;
    this.formulario = new FormGroup({
      idMesa : new FormControl(acesso.IdMesa),
      chave: new FormControl(acesso.chave)
    })



  }

  getMesa(idHash :any) {

    this.mesaService.getMesaDetalhe(this.idMesaHash).subscribe(response => {
      this.wrapperMesa = response
    })
  }

  resumodetalhe() {
    if (this.tipo =='resumo') {
      this.tipo = 'detalhe';
    } else {
      this.tipo = 'resumo';
    }
  }

  onSubmit() {
    this.mesaaceso.getAcesso(this.formulario).subscribe(
      (      data: any) => {
        this.success = data.result;
        this.wrapperConsumo = data;
        this.tipo = 'resumo';
        console.log(data); // Data which is returned by call

      },
      (      error: any) => { console.log(error); // Error if any
      }
    )
  }

}

