import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../_core/services/data.service'

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  listMovie: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.layDanhSachPhim();
  }
  layDanhSachPhim() {
    this.dataService.getListMovie().subscribe((data: any) => {
      console.log(data)
      this.listMovie = data;
    })
  }
}
