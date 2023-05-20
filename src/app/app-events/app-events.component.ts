import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-events',
  templateUrl: './app-events.component.html',
  styleUrls: ['./app-events.component.css']
})
export class AppEventsComponent implements OnInit {
   
  items:string[]=[]
  itemsFilter:string[]=[]

  constructor() { }

  ngOnInit(): void {
  }
  additem(item:string){
   this.items.push(item);
   this.itemsFilter=this.items;
  }
  removeitem(idx:number){
   this.items.splice(idx,1);
   this.itemsFilter=this.items;
  }
  compareitems(value:string){
    if(value==""){
      this.itemsFilter=this.items;
    }
    else{
     this.itemsFilter=this.items.filter(item=>item.includes(value)) 
    }

    
    

    
        // for (let index = 0; index < this.items.length; index++) {
        //   let item = this.items[index];
        //   for(let  i = 0; i < item.length; i++)
        //  if(item.charAt[i]!=char) {
            
        //   this.removeitem(index)

        //  }
          
        // }
     
      }      
  

}
