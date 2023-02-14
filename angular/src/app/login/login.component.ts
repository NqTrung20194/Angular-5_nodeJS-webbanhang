import { Component, OnInit } from '@angular/core';

// gọi api
import{HttpClient, HttpHeaders} from '@angular/common/http';

//gọi 3 thư viện xử lý form
import { FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient,private router : Router) { }

  url = 'http://localhost:3000/api/users/login';
  mess = '';
  ngOnInit(): void {
  }
  
  // handdletLogin(data){

  //   //gọi api qua node để login -> nếu thành công -> token

  //   //login thành công
  //   localStorage.setItem('token','123456');
  //   console.log('Login thành công');
  // }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email] ),
    password : new FormControl('',[Validators.required,Validators.minLength(3)])
  });

  get email(){return this.loginForm.get('email')};
  get password(){return this.loginForm.get('password')};
  get name(){return this.loginForm.get('name')};

  login(password,email)
  { 
    
    password = this.loginForm.value.password;
    email = this.loginForm.value.email;

    // cài đặt header
    let option = {
      headers : new HttpHeaders().set("Content-Type",
      "application/x-www-form-urlencoded")
    }
    let body = new URLSearchParams();
    
    //khai báo body
    body.set('password',password);
    body.set('email',email);

    // console.log(body.toString());
    this.http.post(this. url , body.toString(), option).subscribe((kq)=>{
      localStorage.setItem('token',kq['data']);
      // console.log(kq['data']);
      // this.mess='Đăng nhập thành công';
      this.router.navigateByUrl('/danh-muc');
    });
  }

}
