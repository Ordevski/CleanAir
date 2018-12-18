import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';



import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { WakeUpCallComponent } from './wake-up-call/wake-up-call.component';
import { MovementComponent } from './movement/movement.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { ThemeModule } from './Theme.module';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    WakeUpCallComponent,
    MovementComponent,
    NewsComponent,
    HomeComponent,
    MenuComponent,
   routingComponents,
   SliderComponent
  ],
  imports: [
    ThemeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    SlideshowModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
