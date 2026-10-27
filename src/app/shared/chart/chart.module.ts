import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRoutingModule } from './chart-routing.module';
import { ZoomableComponent } from './zoomable/zoomable.component';
@NgModule({
  declarations: [
    ZoomableComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    
]
})
export class ChartModule { }
