import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { NossosServicosComponent } from './components/nossos-servicos/nossos-servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"quemsomos",component:QuemsomosComponent},
  {path:"nossos-servicos",component:NossosServicosComponent},
  {path:"contato", component:ContatoComponent},
  {path:"obrigado",component:ObrigadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
