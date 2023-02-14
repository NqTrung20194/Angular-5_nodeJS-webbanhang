import { Component, OnInit } from '@angular/core';

// gọi HttpClient
import { HttpClient } from '@angular/common/http';


// gọi thư viện lấy params
import{ ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router:ActivatedRoute, private http: HttpClient) { }

  url_allProducts='http://localhost:3000/api/categories';
  
  allProducts;
  title;
  

  ngOnInit(): void {
    this.title = 'Categories';
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.http.get(this.url_allProducts).subscribe((kq)=>{
        this.allProducts = kq['data'];
        //console.log(this.allProducts);
      });

  

    });
  }

}
