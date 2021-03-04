import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hijo1Component } from './pages/hijo1/hijo1.component';
import { Hijo2Component } from './pages/hijo2/hijo2.component';
import { Hijo3Component } from './pages/hijo3/hijo3.component';
import { PadreRoutingModule } from './padre-routing.module';



@NgModule({
  declarations: [Hijo1Component, Hijo2Component, Hijo3Component],
  imports: [
    CommonModule,
    PadreRoutingModule
  ]
})
export class PadreModule { }
