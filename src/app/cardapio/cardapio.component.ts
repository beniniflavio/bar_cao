import { Component, OnInit } from '@angular/core';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  wrapper: any;

  constructor(private service:CardapioService) { }

  ngOnInit(): void {
    this.service.getCardapio().subscribe(response => {
      this.wrapper = response;
    })
  }

}
