import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoslediciComponent } from './posledici/posledici.component';
import { SoluciiComponent } from './solucii/solucii.component';
import { WakeUpCallComponent } from './wake-up-call/wake-up-call.component';
import { MovementComponent } from './movement/movement.component';

@NgModule({
  declarations: [
    AppComponent,
    PoslediciComponent,
    SoluciiComponent,
    WakeUpCallComponent,
    MovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
