import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
    localStorage.setItem('Email',null);
    window.location.reload();
    this._router.navigate(['\login']);
  }

}
