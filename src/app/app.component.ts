import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    x:boolean=false;
    email:string='';
     constructor(public _router:Router,public location: Location) {}
    
     
    ngOnInit(){
this.email=localStorage.getItem('Email');
console.log(this.email);
this.x=false;
console.log(this.x);
if(this.email != "null")
{
  this.x = true;
  this._router.navigate(['/dashboard']);
  console.log(this.x);
}
else
{
  this.x = false;
}
console.log(this.x);
    }

    isMap(path){
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (path === titlee){
        return false;
      }
      else {
        return true;
      }
    }
}
