import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User_Class } from '../login/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  length:number;
  url_login: string = "http://localhost:3000/signup/";
  constructor(public http: HttpClient) { }

  ngOnInit() {
    
      this.http.get(this.url_login).subscribe(
        (x:User_Class[])=>{
          
          this.length=x.length;
         },         
           function(error){alert("error");},			
           function(){
         }			
         );
      
    }

}
