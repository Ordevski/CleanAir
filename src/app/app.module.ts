import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { WakeUpCallComponent } from './wake-up-call/wake-up-call.component';
import { MovementComponent } from './movement/movement.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
   routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
