import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){
  }

  canActivate() {
    // kiem tra login cho admin
    if (localStorage.getItem('UserAdmin')) {
      // cho phep di toi duong dan cua dashboard danh cho admin
    console.log(456)
      return true;
    }
    console.log(123)
    this.router.navigate(['/admin'])
    return false
  }
}
