import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HerosectionComponent } from '../../herosection/herosection.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    HerosectionComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
