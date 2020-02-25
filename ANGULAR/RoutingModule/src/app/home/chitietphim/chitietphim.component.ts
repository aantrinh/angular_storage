import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {
  id: any;
  detailMovie: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.getParamsFromUrl();
    this.layChiTietPhim();
  }

  getParamsFromUrl() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); //trả về con số id => là mã phim cần tìm
    // console.log(this.id)
  }

  layChiTietPhim(){
    this.dataService.getDetailMovie(this.id).subscribe(data=>{
      // console.log(data);
      this.detailMovie = data;
    });
  }
}
