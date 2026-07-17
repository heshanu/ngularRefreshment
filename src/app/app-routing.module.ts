import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const routes: Routes = [
  {path:'appointment',component:AppointmentListComponent},
  {path: '', loadChildren: () => import('./module/homepage/homepage.module').then(m => m.HomepageModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
