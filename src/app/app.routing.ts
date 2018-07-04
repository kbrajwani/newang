import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';


 
const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'signup',      component: SignupComponent },
    { path: 'login',      component: LoginComponent },
    { path: 'logout',      component: LogoutComponent },


    
    { path: 'user',           component: UserComponent },
 
   
 
      { path: '',          redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
