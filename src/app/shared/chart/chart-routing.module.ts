import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomableComponent } from './zoomable/zoomable.component';

const routes: Routes = [
  {path:'',component:ZoomableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
