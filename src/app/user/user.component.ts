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
  token:string;
  ngOnInit() {
    this.token=localStorage.getItem('Token');
    
this.email=localStorage.getItem('Email');
    this.data.getUser(new User_Class(this.email,'','','',this.token)).subscribe(
      (x:User_Class[])=>{
        
if(x.length==1)
{
this.email=x[0].user_email;
this.name=x[0].user_name;
this.password=x[0].password;
}
else
{
  alert("you are not authorized user");
  localStorage.setItem('Email',null);
  window.location.reload();
  this._router.navigate(['\login']);
}
      },
      function(error){alert("error");},			
        function(){
      }			

    );
  }

  update()
  {
    this.data.updateuser(new User_Class(this.email,this.name,this.password,'',this.token)).subscribe(
      (x:User_Class[])=>{
        
        alert("success");
      },
      function(error){alert("error");},			
        function(){
      }		
    );
  }
  }
