import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
  register(value) {
    console.log(value)
    const user = {
      taiKhoan: value.TaiKhoan,
      matKhau: value.MatKhau,
      email: value.Email,
      soDt: value.soDt,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'Khach Hang',
      hoTen: value.HoTen

    }
    this.dataService.register(user).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
