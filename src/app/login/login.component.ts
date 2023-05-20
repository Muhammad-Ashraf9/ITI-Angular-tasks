import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersService } from '../get-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers:any;          
user={username:"",password:""};
  constructor (private userserv:GetUsersService, private router:Router) {


   }

  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe(x=>{
      return this.allUsers=x;
    });
  }
  login(data:any){
    for (let i = 0; i < this.allUsers.length; i++) {
      if(this.user.username==this.allUsers[i].username &&  this.user.password==this.allUsers[i].password){
        this.router.navigate(['/userdetails',this.user.username])
        

      }
      
    }
  }


}
