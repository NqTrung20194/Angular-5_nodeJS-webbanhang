import { Component, OnInit } from '@angular/core';

// gọi HttpClient
import { HttpClient } from '@angular/common/http';


// gọi thư viện lấy params
import{ ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-categories',
  templateUrl: './detail-categories.component.html',
  styleUrls: ['./detail-categories.component.css']
})
export class DetailCategoriesComponent implements OnInit {

  constructor(private router:ActivatedRoute, private http: HttpClient) { }

  url_product='http://localhost:3000/api/categories/';
  ProductsOfCategories;
  title;


  ngOnInit(): void {
    this.title = 'Categories';
    this.router.paramMap.subscribe((params:ParamMap)=>{
      
      this.http.get(this.url_product + params.get('id')).subscribe((kq)=>{
        this.ProductsOfCategories = kq['data'];
        // console.log(this.ProductsOfCategories);
      });

      

    });
  }

}
