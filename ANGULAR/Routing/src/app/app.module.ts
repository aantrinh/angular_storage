import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { LienHeComponent } from './home/lien-he/lien-he.component';
// import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent, TrangChuComponent, DanhSachPhimComponent, TinTucComponent, LienHeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
