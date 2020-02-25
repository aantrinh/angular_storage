import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { 
    console.log('constructor')
  }

  ngOnChanges(){
    console.log('ngOnChanges') // chi consle ra tu lop cha truyen qua con 
  }
  ngOnInit() {
    console.log('ngOnInit')
  }
  ngAfterViewInit(){
    // task: DOM ra HTML
    console.log('ngAfterViewInit') // giup dam bao html load ra truoc roi no se chay
  }
  ngOnDestroy(){
    console.log('ngOnDestroy') // giup giai phong cac tai nguyen 
  }

  addUser(value){
    console.log(value);
    const user = {
        taiKhoan: value.TaiKhoan,
        matKhau: value.MatKhau,
        email: value.Email ,
        soDt: value.SoDT ,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang" ,
        hoTen: value.HoTen
    }

    this.dataService.addUser(user).subscribe((data:any)=>{
      alert('ADD USER SUCCESS');
    })
  }
}
