import { MovimentoService } from './movimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.css']
})
export class MovimentosComponent implements OnInit {
  wrapper: any;

  constructor(private service: MovimentoService) { }

  ngOnInit(): void {
    this.getMovimentoAberto();
  }

  getMovimentoAberto(): void {

    this.service.getMovimentoAberto().subscribe(response => {
      console.log(response);
      this.wrapper = response;
    })

  }
}
