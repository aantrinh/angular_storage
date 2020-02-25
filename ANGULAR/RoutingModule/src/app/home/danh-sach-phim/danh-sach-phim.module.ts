import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [DanhSachPhimComponent, MovieComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
