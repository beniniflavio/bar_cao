import { ActivatedRoute } from '@angular/router';
import { DetalheService } from './detalhe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  idhash: any;
  wrapper: any;
  success: any;

  constructor(private service: DetalheService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.success = 0;
    this.activatedRoute.params.subscribe(params => {
      this.idhash = params['id'];
    })


    this.service.getConsumoDetalhe(this.idhash).subscribe(response => {
      this.wrapper = response;   
    })

  }

  setComponente(idhashmercadoria: string) {
    if (this.wrapper.msgSaida[0].componentes.find((comp: { id: string; }) => comp.id == idhashmercadoria).quantidade == 1) {
      this.wrapper.msgSaida[0].componentes.find((comp: { id: string; }) => comp.id == idhashmercadoria).quantidade = 0;
    } else {
      this.wrapper.msgSaida[0].componentes.find((comp: { id: string; }) => comp.id == idhashmercadoria).quantidade = 1;
    }
  }

  setAdcional(idhashmercadoria: string) {
    this.wrapper.msgSaida[0].adicionais.find((comp: { id: string; }) => comp.id == idhashmercadoria).quantidade++;
    this.totalizacao();
  }

  setAdcionalRetirar(idhashmercadoria: string) {
    if (this.wrapper.msgSaida[0].adicionais.find( (adc: { id: string; }) => adc.id === idhashmercadoria).quantidade >=1 ) {
    this.wrapper.msgSaida[0].adicionais.find((comp: { id: string; }) => comp.id == idhashmercadoria).quantidade--;
    }
    this.totalizacao();
  }


  totalizacao() {
    this.wrapper.msgSaida[0].adicionais.map((adcicionais: any) => {
      this.wrapper.msgSaida[0].consumo.valor = this.wrapper.msgSaida[0].consumo.mercadoria.valor + adcicionais.quantidade * adcicionais.valor

    })

  }

  atualizar() {
    var a = this.service.setConsumo(this.wrapper.msgSaida[0]);  
  }

}
