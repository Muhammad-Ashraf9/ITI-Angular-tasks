import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from '../get-users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 userName:string="";
 userNameDtls:any;
  constructor(private activroute:ActivatedRoute, private userserv:GetUsersService) { }

  ngOnInit(): void {
    this.activroute.params.subscribe(params=>{this.userName=params['username']});
    this.userNameDtls=this.userserv.getUserByUsername(this.userName);

  }

}
