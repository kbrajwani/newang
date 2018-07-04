import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User_Class } from '../login/user';
import 'rxjs/add/operator/map';


@Injectable()
export class SignupService {
  url_login: string = "http://localhost:3000/signup/";
  
 

  constructor(public http: HttpClient) { }
  
  addUser(user){
    
    let body = JSON.stringify(user);
    
   return this.http.post(this.url_login, body,{headers:new HttpHeaders().set('Content-Type','application/json')} );
  }
}
