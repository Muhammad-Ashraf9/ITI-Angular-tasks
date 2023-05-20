import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any;
  constructor( private productserve:ProductService ) { 

  }

  ngOnInit(): void {
    this.productList=this.productserve.getAllProducts();
  }

}
