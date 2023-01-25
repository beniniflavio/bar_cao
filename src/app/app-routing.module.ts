import { DetalheComponent } from './consumo/detalhe/detalhe.component';
import { MercadoriaComponent } from './consumo/mercadoria/mercadoria.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { MovimentosComponent } from './movimentos/movimentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './consumo/grupo/grupo.component';
import { MercadoriasComponent } from './consumo/mercadorias/mercadorias.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { AdicionarComponent } from './cardapio/adicionar/adicionar.component';
import { TicketComponent} from './cardapio/ticket/ticket.component';
import { MesaComponent } from './mesa/mesa.component';


const routes: Routes = [
    {path:'', component: MovimentosComponent },
    {path:'Consumir/:idMesa/:idMercadoria', component: MercadoriaComponent},
    {path:'Consumo/:id', component: DetalheComponent },
    {path:'Consumo/Mesa/:id', component: ConsumoComponent },
    {path:'Consumo/Mesa/Grupo/:id', component: GrupoComponent },
    {path:'Consumo/Mesa/:idMesa/:idGrupo', component: MercadoriasComponent},
    {path:'Cardapio', component: CardapioComponent},
    {path:'Cardapio/Adicionar/:idHashGrupo', component: AdicionarComponent},
    {path:'Cardapio/Ticket', component: TicketComponent},
    {path:'Mesa/:idMesa', component: MesaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
