import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getListMovie(): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err)
      })
    );
  }

  getDetailMovie(id): Observable<any> {
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );

  }
  register(user): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }

  addUser(user): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    
    return this.http.get(url, user).pipe(
      tap(() => { }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }


  login(user): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, user).pipe(
      tap(() => { }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }

  handleErr(err) {
    console.log(err)
    switch (err.status) {
      case 401:
        break;
      case 402:
        break;
      case 403:
        break;
      case 500:
        alert(err.err)
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
