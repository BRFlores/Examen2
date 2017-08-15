import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaveComponent } from './Componentes/nave/nave.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NaveComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
