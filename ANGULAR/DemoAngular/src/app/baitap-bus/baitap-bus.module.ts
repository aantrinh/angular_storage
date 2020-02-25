import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapBusComponent } from './baitap-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';



@NgModule({
  declarations: [BaitapBusComponent, DanhSachGheComponent, GheComponent],
  exports:[BaitapBusComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapBusModule { }
