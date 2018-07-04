import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { UpdateService } from './update.service';
import { User_Class } from '../login/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _router:Router,public data:UpdateService) { }
  email:string;
  password:string;
  name:string;
  ngOnInit() {
this.email=localStorage.getItem('Email');
    this.data.getUser(this.email).subscribe(
      (x:User_Class[])=>{
//alert(x);

this.email=x[0].user_email;
this.name=x[0].user_name;
this.password=x[0].password;
console.log(this.password);
      },
      function(error){alert("error");},			
        function(){
      }			

    );
  }

  update()
  {
    this.data.updateuser(new User_Class(this.email,this.name,this.password,'','')).subscribe(
      (x:User_Class[])=>{
        
        alert("success");
      },
      function(error){alert("error");},			
        function(){
      }		
    );
  }
  }
