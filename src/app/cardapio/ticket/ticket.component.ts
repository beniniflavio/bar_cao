import { Ticket } from './../../model/data/ticket';
import { Component, OnInit, Input } from '@angular/core';
import { MesaService } from 'src/app/services/mesa.service';
import { TicketService } from './ticket.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode'

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TicketData } from 'src/app/model/TickerData';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {


  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value="http://localhost:4200/Mesa/";

  wrapperMesa: any;

  wrapper: any;

  formulario!: FormGroup;

  success:any;

  constructor(private serviceMesa: MesaService,
    private ticketService: TicketService,
    private formBuilder :FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm(new Ticket());
    this.getMesas();

    /*this.formulario = new FormGroup({
      mesas: new FormControl(this.wrapperMesa),
      mesa: new FormControl('-1'),
      ticket: new FormControl('X X X X'),
    });*/

  }

  onSubmit() {
    this.ticketService.addTickerData(this.formulario).subscribe(
      (      data: any) => {
        this.success = data.result;
        this.value= this.value + data.msgSaida[0].id_mesa;
        console.log(data); // Data which is returned by call

      },
      (      error: any) => { console.log(error); // Error if any
      }
    )

  }

  createForm(ticket :Ticket) {
    this.formulario = new FormGroup({
      mesa: new FormControl(ticket.mesa),
      chave: new FormControl(ticket.chave),
    })
  }

  getMesas() {
    this.serviceMesa.getMesas().subscribe((response) => {
      this.wrapperMesa = response;
    });
  }

  setMesa(mesa: any) {
    this.wrapper = mesa;
  }
}
