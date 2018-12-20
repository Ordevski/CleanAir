import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { WakeUpCallComponent } from './wake-up-call/wake-up-call.component';
import { MovementComponent } from './movement/movement.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    WakeUpCallComponent,
    MovementComponent,
    NewsComponent,
    HomeComponent,
    routingComponents,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    SlideshowModule,
    MatCheckboxModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
