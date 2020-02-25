import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangKyRoutingModule } from './dang-ky-routing.module';
import { DangKyComponent } from './dang-ky.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [DangKyComponent],
  imports: [
    CommonModule,
    DangKyRoutingModule,
    FormsModule
  ]
})
export class DangKyModule { }
