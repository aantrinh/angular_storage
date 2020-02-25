import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { LienHeComponent } from './lien-he/lien-he.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: TrangChuComponent
      },
      {
        path: 'trang-chu',
        component: TrangChuComponent
      },
      {
        path: 'tin-tuc',
        component: TinTucComponent
      },
      {
        path: 'lien-he',
        component: LienHeComponent
      },
      // routing theo module theo kieu loadchildren
      {
        path: 'danh-sach-phim',
        loadChildren: './danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'
      },
      {
        path: 'detail/:id',
        loadChildren: './chitietphim/chitietphim.module#ChitietphimModule'
      },
      {
        path:'dang-ky',
        loadChildren: './dang-ky/dang-ky.module#DangKyModule'
      }
    ]
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
