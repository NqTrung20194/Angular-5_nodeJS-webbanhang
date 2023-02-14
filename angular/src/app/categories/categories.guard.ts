import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// gắn thêm router để có thể chuyển hướng người dùng vào đăng nhập
@Injectable({
  providedIn: 'root'
})
export class CategoriesGuard implements CanActivate {

  constructor(private router : Router){}
  token;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // giúp bảo vệ routing
    this.token = localStorage.getItem('token');
    if(this.token ==null){
     console.log('token đã hết hạn');
     // chuyển hướng người dung về đăng nhập
     this.router.navigateByUrl('/dang-nhap');
     return false;
    }else{
      // console.log(localStorage.getItem('token'));
      return true;
    }

    
  }
  
}
