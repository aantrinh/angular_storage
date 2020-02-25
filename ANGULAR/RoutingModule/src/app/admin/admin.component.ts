import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import {Router} from '@angular/router';
// import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('UserAdmin')){
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(value) {
    const user={
      taiKhoan: value.TaiKhoan,
      matKhau: value.MatKhau
    }
    // console.log(value)
    this.dataService.login(user).subscribe((data:any)=>{
      console.log(data)
      if(data.maLoaiNguoiDung==='QuanTri'){
        localStorage.setItem('UserAdmin', JSON.stringify(data));
        alert('Login success')
        this.router.navigate(['/admin/dashboard']);
      }else{
        alert('Khong co quyen truy cap')
      }
    });
  }
}
