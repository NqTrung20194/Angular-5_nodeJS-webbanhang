import { Component, OnInit } from '@angular/core';

//gọi 3 thư viện xử lý form
import { FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

// gọi api
import{HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:3000/api/users/regiter';
  mess;

  ngOnInit(): void {
    
  }

  registerForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('',[Validators.required, Validators.email] ),
    password : new FormControl('',[Validators.required,Validators.minLength(3)]),
    phone : new FormControl('',[,Validators.minLength(9),Validators.pattern('[0-9]*')])
  });

  

  get email(){return this.registerForm.get('email')};
  get password(){return this.registerForm.get('password')};
  get name(){return this.registerForm.get('name')};


  register(name,password,email)
  { 
    name = this.registerForm.value.name;
    password = this.registerForm.value.password;
    email = this.registerForm.value.email;

    // cài đặt header
    let option = {
      headers : new HttpHeaders().set("Content-Type",
      "application/x-www-form-urlencoded")
    }
    let body = new URLSearchParams();
    
    //khai báo body
    body.set('name',name);
    body.set('password',password);
    body.set('email',email);

    //console.log(body.toString());
    this.http.post(this. url , body.toString(), option).subscribe((kq)=>{
      console.log(kq['data']);
    })
  }

  
}


