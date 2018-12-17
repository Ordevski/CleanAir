import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoslediciComponent } from './posledici/posledici.component';
import { SoluciiComponent } from './solucii/solucii.component';

@NgModule({
  declarations: [
    AppComponent,
    PoslediciComponent,
    SoluciiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
