import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { AuthResponseData } from './auth-response-data';
import { User } from './register-login/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=new Subject<User>();

  constructor(private http:HttpClient) { }

  register( email:string,password:string){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5ZKLRCc28bGK0MzbMChFGEmofQR5_Jq8'
   , { email:email,
    password:password,
  returnSecureToken:true }).pipe(tap(resData=>{
    const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn*1000);
    const user=new User(resData.email,resData.localId,resData.idToken,expirationDate);
    this.user.next(user);
  })) ;

  }
  login(email:string,password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5ZKLRCc28bGK0MzbMChFGEmofQR5_Jq8'
    , { email:email,
     password:password,
   returnSecureToken:true }).pipe(tap(resData=>{
    const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn*1000);
    const user=new User(resData.email,resData.localId,resData.idToken,expirationDate);
    this.user.next(user);
  }));

  }
}
