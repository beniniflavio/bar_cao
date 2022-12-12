import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdicionarService } from './adicionar.service';
import { GruposService } from 'src/app/services/grupos.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent implements OnInit {
  wrapper: any;
  wrapperGrupos: any;
  idhashGrupo: any;
  item: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AdicionarService,
    private serviceGrupo: GruposService
  ) {}

  ngOnInit(): void {
    this.getParametros();

    this.getMercadorias(this.idhashGrupo);

    if (this.idhashGrupo == 'Todos') {
      this.getGrupos();
    }
  }

  setItemCardapio(idhash: string, site: string) {
    var s = this.service.setAdicionar( idhash, site);

  }

  getParametros() {
    this.activatedRoute.params.subscribe((params) => {
      this.idhashGrupo = params['idHashGrupo'];
    });
  }

  getMercadorias(idhashGrupo: string) {
    this.service.getMercadorias(idhashGrupo).subscribe((response) => {
      this.idhashGrupo = idhashGrupo;
      this.wrapper = response;
    });
  }



  getGrupos() {
    this.serviceGrupo.getGrupos().subscribe((response) => {
      this.wrapperGrupos = response;
    });
  }
}
