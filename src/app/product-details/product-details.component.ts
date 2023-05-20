import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 productId:number=0;
 product?:IProduct;
  constructor( private activroute:ActivatedRoute, private productserv:ProductService ) { 


  }

  ngOnInit(): void {
    this.activroute.params.subscribe(params=>{this.productId=params['id']})
    this.product=this.productserv.getProductById(this.productId)
  }

}
