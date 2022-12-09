import { ConsumoCustomData } from './../../model/ConsumoCustomData';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from './mercadoria.service';
import { MesaService } from 'src/app/services/mesa.service';


@Component({
  selector: 'app-mercadoria',
  templateUrl: './mercadoria.component.html',
  styleUrls: ['./mercadoria.component.css']
})
export class MercadoriaComponent implements OnInit {
  idhashMercadoria: any;
  idhashMesa: any;
  wrapper: any;
  wrapperMesa: any;
  consumoCustomData? :ConsumoCustomData;
  mensagem:any;
  success:any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: MercadoriaService,
    private serviceMesa: MesaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idhashMesa = params['idMesa'];
      this.idhashMercadoria = params['idMercadoria'];
      this.success = 0;
    })

    this.mensagem = '';
    this.getMercadoria();

  }

  getMercadoria() {
    this.service.getConsumoMercadoria(this.idhashMesa , this.idhashMercadoria).subscribe(response => {
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
      this.wrapper.msgSaida[0].consumo.valor += adcicionais.quantidade * adcicionais.valor
    })
  }

  salvar () {

    var s = this.service.setConsumo(this.wrapper.msgSaida[0]);
    this.mensagem = s.msgSaida[0];
    this.success = 1;
  }
}
