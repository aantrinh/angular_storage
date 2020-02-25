import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { LienHeComponent } from './home/lien-he/lien-he.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';

const routes: Routes = [
  // Routing đến Trang Home
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: TrangChuComponent
      },
      // Routing đến Trangchu
      {
        path: 'trang-chu',
        component: TrangChuComponent,
      },
      // Routing đến Trang danhsachphim
      {
        path: 'danh-sach-phim',
        component: DanhSachPhimComponent
      },
      // Routing đến Trang lienhe
      {
        path: 'lien-he',
        component: LienHeComponent
      },
      // Routing đến Trang tintuc
      {
        path: 'tin-tuc',
        component: TinTucComponent
      }
    ]
  },
  // Routing đến Trang Admin
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
