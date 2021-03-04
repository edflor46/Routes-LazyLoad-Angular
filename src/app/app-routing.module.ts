import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'padre',
    loadChildren: () => import ('./padre/padre.module').then(m => m.PadreModule)
  },
  {
    path:'**',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
