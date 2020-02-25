import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(DanhSachPhimComponent, {static: false}) tagListMovie: DanhSachPhimComponent;
  // 
  @ViewChild("inputName", {static: false}) inputName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addMovie(maPhim, tenPhim, giaPhim, anhPhim){
    console.log(maPhim, tenPhim, giaPhim, anhPhim);
    this.tagListMovie.themPhim({
      maPhim, tenPhim,
      gia: giaPhim,
      hinhAnh: anhPhim
    });
  }

  // cach DOM den o input de lay value
  domHTML(){
    console.log(this.inputName.nativeElement.value);
  }
}
