import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { User_Class } from '../login/user';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;
  name:string;

  constructor(public _router:Router,public data:SignupService) { }

  ngOnInit() {
  }
login(){
  this._router.navigate(['/login']);
}
register(){
  
    

    // const fd = new FormData();

    // fd.append('email',this.email_id);
    // fd.append("password",this.password);
    // fd.append("uname",this.uname);
    // fd.append("gender",this.gender);
    // fd.append("mobile_no",this.mobile);
    // fd.append("address",this.address);
    
    // console.log(fd);
    
    //this.data.addUser(fd).subscribe(
      this.data.addUser(new User_Class(this.email,this.name,this.password,'','')).subscribe(
    (data:any)=>{
    
  this._router.navigate(['/login']);},   
      function(error){alert("Try Again");},			
      function(){
    
    }			
    );
    
    
  }

}


