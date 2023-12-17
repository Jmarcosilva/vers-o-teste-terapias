import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { NossosServicosComponent } from './components/nossos-servicos/nossos-servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemsomosComponent,
    NossosServicosComponent,
    ContatoComponent,
    ObrigadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
