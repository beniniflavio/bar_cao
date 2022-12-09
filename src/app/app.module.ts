import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovimentosComponent } from './movimentos/movimentos.component';
import { MesasComponent } from './movimentos/mesas/mesas.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { GrupoComponent } from './consumo/grupo/grupo.component';
import { MercadoriasComponent } from './consumo/mercadorias/mercadorias.component';
import { MercadoriaComponent } from './consumo/mercadoria/mercadoria.component';
import { DetalheComponent } from './consumo/detalhe/detalhe.component';
import { CardapioComponent } from './cardapio/cardapio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovimentosComponent,
    MesasComponent,
    ConsumoComponent,
    GrupoComponent,
    MercadoriasComponent,
    MercadoriaComponent,
    DetalheComponent,
    CardapioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
