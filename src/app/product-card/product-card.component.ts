import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() product?:IProduct;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToDetails(){
    this.router.navigateByUrl('productdetails')
  }

}
