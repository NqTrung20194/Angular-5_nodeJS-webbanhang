import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  token;
  
  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    // if(this.token !=null){
    //   console.log('token đã hết hạn');
    //   localStorage.clear()
    //  }

    ;
  }

}
