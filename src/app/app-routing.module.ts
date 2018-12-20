import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WakeUpCallComponent} from './wake-up-call/wake-up-call.component';
import {HomeComponent} from './home/home.component';
import {MovementComponent} from './movement/movement.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  {path: 'wake-up-call', component: WakeUpCallComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'movement' , component: MovementComponent},
  {path: 'news' , component: NewsComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WakeUpCallComponent, HomeComponent, MovementComponent, NewsComponent];
