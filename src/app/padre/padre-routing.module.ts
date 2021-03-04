import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Hijo1Component } from './pages/hijo1/hijo1.component';
import { Hijo2Component } from './pages/hijo2/hijo2.component';
import { Hijo3Component } from './pages/hijo3/hijo3.component';


const routes:Routes = [
  {
    path: '',
    children:[
      {
        path: 'hijo1',
        component: Hijo1Component
      },
      {
        path: 'hijo2',
        component:Hijo2Component
      },
      {
        path: 'hijo3',
        component:Hijo3Component
      },
      {
        path: '**',
        redirectTo: 'hijo1'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PadreRoutingModule { }
