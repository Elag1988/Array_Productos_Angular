import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';
import { ListadoarticulosComponent } from './listado-articulos/listadoarticulos/listadoarticulos.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorNumericoComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
