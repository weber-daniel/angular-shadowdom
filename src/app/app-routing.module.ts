import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RedCircleComponent} from './red-circle/red-circle.component';
import {BlueCircleComponent} from './blue-circle/blue-circle.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blue',
    component: BlueCircleComponent
  },
  {
    path: 'red',
    component: RedCircleComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
