import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'


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
import { AdicionarComponent } from './cardapio/adicionar/adicionar.component';
import { RegistroComponent } from './consumo/registro/registro.component';
import { TicketComponent } from './cardapio/ticket/ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesaComponent } from './mesa/mesa.component';


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
    AdicionarComponent,
    RegistroComponent,
    TicketComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
