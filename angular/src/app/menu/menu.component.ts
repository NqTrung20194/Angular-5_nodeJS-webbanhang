import { Component, OnInit } from '@angular/core';

// gọi HttpClient
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url_sidebar='http://localhost:3000/api/categories/ParentsChilds';
  
  sidebar;

  ngOnInit(): void {
    this.http.get(this.url_sidebar).subscribe((kq)=>{
      this.sidebar = kq['data'];
      //console.log(this.sidebar);
    })
  }

}
