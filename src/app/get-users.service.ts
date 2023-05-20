import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  userList:any;

  constructor(private http:HttpClient) {
   }
   getAllUsers(){
    return this.http.get('https://fakestoreapi.com/users')

   }
   getUserByUsername(username:string){
    this.userList=this.http.get('https://fakestoreapi.com/users');
    return this.userList.find((u:any)=>{
      return u.username==username
    });

   }
}

