import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct=new FormGroup({
    title:new FormControl('',Validators.required),
    description :new FormControl('',Validators.required),
    image  :new FormControl('',Validators.required),
    price  :new FormControl('',Validators.required),
  })

  constructor(private productserve:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  get title(){
    return this.addProduct.get('title') as FormControl
  }
  get description(){
    return this.addProduct.get('description') as FormControl
  }
  get image(){
    return this.addProduct.get('image') as FormControl
  }
  get price(){
    return this.addProduct.get('price') as FormControl
  }
  addNewProduct(product:any){
    this.productserve.addProductList(product);
    this.router.navigate(['productlist'])
    

    
  }

}
