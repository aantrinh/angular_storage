import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChitietphimRoutingModule } from './chitietphim-routing.module';
import { ChitietphimComponent } from './chitietphim.component';


@NgModule({
  declarations: [ChitietphimComponent],
  imports: [
    CommonModule,
    ChitietphimRoutingModule
  ]
})
export class ChitietphimModule { }
