import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {PhimComponent} from './../phim/phim.component'

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(PhimComponent) tagListMovie: QueryList <PhimComponent>;

  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "./assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "./assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "./assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "./assets/images/insideout.jpg" },
  ];

  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ]


  constructor() { }

  ngOnInit() {
  }

  likeMovie(movie) {
    // console.log(movie);
    // cach khac


    /**
     * 0. duyet mang dsLike
     * 1. tim movie co ton tai trong mang dsLike khong? use ham find()
     * 2. sau khi tim thay movie trong mang thi tang soLike len ++
     */

  const phim = this.danhSachLike.find(item => item.maPhim === movie.maPhim);
    phim.soLike++;
    console.log(phim);

  }

  themPhim(phim){
    this.danhSachPhim.push(phim);
  }

  viewChildren(){
   this.tagListMovie.map(item =>{
    console.log(item);
    if(item.movie.maPhim === 2){
      item.movie.gia = 200000;
    }
   });
  }
 
}
