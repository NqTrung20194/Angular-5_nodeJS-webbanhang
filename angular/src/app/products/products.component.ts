import { Component, OnInit } from '@angular/core';

// gọi HttpClient
import { HttpClient } from '@angular/common/http';


// gọi thư viện lấy params
import{ ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:ActivatedRoute, private http: HttpClient) { }

  url_Products='http://localhost:3000/api/products/';
  Product;
  id_parents_products;
  
  url_product='http://localhost:3000/api/categories/';
  ProductsOfCategories;

  

  ngOnInit(): void {

    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.http.get(this.url_Products + params.get('id')).subscribe((kq)=>{
        this.Product= kq['data'];
        //console.log(this.Product[0].parents[0]);
        this.id_parents_products = kq['data'][0].parents[0];
        console.log(this.id_parents_products);


        this.http.get(this.url_product + this.id_parents_products + '/' + kq['data'][0]._id).subscribe((kq)=>{
          this.ProductsOfCategories = kq['data'];
           console.log(this.url_product + this.id_parents_products + '/' + kq['data'][0]._id);
        });
      })
    });

  }

}
