import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ISnack } from './isnack';
import { Router } from '@angular/router';


@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})


export class SnacksComponent implements OnInit {
  snacks:ISnack[]=[];

  snacksSelected:number[]=[];
  total:number=0;
  constructor(private snacksserv:DataService, private router:Router) { }

  ngOnInit(): void {
    this.snacks=this.snacksserv.getAllSnacks();

  }
  selectSnacks(form:NgForm){
this.snacksserv.selectedSnacks=[...this.snacksSelected];
  }
  changeTotal(){
    this.snacksserv.snacksTotalFun();
    this.total=this.snacksserv.snacksTotal;

  }


}
