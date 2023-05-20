import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
   todayDate:any=new Date();
   theaterDays:any=['Tu 27-9','We 28-9'];
   theaterTimes:any=['7:00 PM','10:15 Pm'];
   isDateSelected=false;
   isTimeSelected=false;
   
  constructor() { }

  ngOnInit(): void {
  }
  onSelectDate(){
this.isDateSelected=true;
  }
  onSelectTime(){
this.isTimeSelected=true;
  }
  selectTime(date:string,time:string){
    

  }

}
