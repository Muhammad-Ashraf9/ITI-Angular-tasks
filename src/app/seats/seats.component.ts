import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats:any=[{id:1,status:'seat'}
  ,{id:2,status:'seat'}
  ,{id:3,status:'seat occupied'}
  ,{id:4,status:'seat'}
  ,{id:5,status:'seat'}
  ,{id:6,status:'seat occupied'}
  ,{id:7,status:'seat'}
  ,{id:8,status:'seat occupied'}
  ,{id:9,status:'seat'}
  ,{id:10,status:'seat occupied'}
  ,{id:11,status:'seat'}
  ,{id:12,status:'seat occupied'}
  ,{id:13,status:'seat'}
  ,{id:14,status:'seat occupied'}
  ,{id:15,status:'seat'}
  ,{id:16,status:'seat occupied'}
];

  seatsSelectedArray:any=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(id:number,index:number){
    if(this.seats[index].status=='seat'){
      this.seats[index].status='seat selected';
    
      this.seatsSelectedArray.push(id);
      console.log(this.seatsSelectedArray);
    
    
    }else if(this.seats[index].status=='seat selected'){
      this.seats[index].status='seat';

      this.seatsSelectedArray=this.seatsSelectedArray.filter((seat: number)=>seat!=id);
      console.log(this.seatsSelectedArray);
    }
    else{
      return;
    }

  }
  onConfirm(){
    this.seatsSelectedArray.forEach((id: number) => {
      let objIndex = this.seats.findIndex((elem:any) => elem.id==id);
      this.seats[objIndex].status = 'seat occupied';
      
    });
  }
  onCancel(){
    this.seatsSelectedArray.forEach((id: number) => {
      let objIndex = this.seats.findIndex((elem:any) => elem.id==id);
      this.seats[objIndex].status = 'seat';
      this.seatsSelectedArray=[];
      
    });
    

  }
}
