import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginService } from './login.service';
import { User_Class } from './user';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router,public data:LoginService) { }
 email:string;
 password:string;
 arr:string[][];

 str:string;
  ngOnInit() {
    localStorage.setItem('Email',null);
  }
  signupuser(){
    this._router.navigate(['/signup']);
  }
  checkuser(){

    this.data.checkuser(new User_Class(this.email,'',this.password,'','')).subscribe(
      (x:User_Class[])=>{
       console.log(x);
        if (x.length==1) {
          localStorage.setItem('Email',this.email);
          window.location.reload();
          
        }
        else {
          
         alert("Something Wrong");
        }
          
      },
       
        function(error){alert("error");},			
        function(){
      }			
      );
  }

}
