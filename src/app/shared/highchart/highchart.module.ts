import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartRoutingModule } from './highchart-routing.module';
import { provideHighcharts } from 'highcharts-angular';
import { CanvasComponent } from './canvas/canvas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    HighchartRoutingModule,
    HttpClientModule
  ]
})
export class HighchartModule { }
