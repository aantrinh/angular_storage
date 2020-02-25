import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { PhimComponent } from './phim/phim.component';



@NgModule({
  declarations: [InteractionComponent, DanhSachPhimComponent, PhimComponent],
  exports:[InteractionComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionModule { }
