import { Injectable } from '@angular/core';
import { ISnack } from './snacks/isnack';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private snacks:ISnack[]=[
    {name:'popcorn',amount:0,price:30},
    {name:'coke',amount:0,price:10},
    {name:'pepsi',amount:0,price:15},

  ]


  selectedSnacks:number[]=[];
  snackTotal:number=0;
  snacksTotal:number=0;
  constructor() { }
  getAllSnacks(){
    return this.snacks;
  }
  snacksTotalFun(){
   for (let i = 0; i < this.snacks.length; i++) {
    this.snackTotal=this.snacks[i].price*this.selectedSnacks[i];
    this.snacksTotal+=this.snackTotal;
   }
    
  }

}
