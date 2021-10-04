import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserDetails } from '../_classes/auth-user-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  AuthCustObject! : AuthUserDetails;

  ngOnInit(): void {
    this.AuthCustObject = new AuthUserDetails();
    this.loginstatus();
  }

  User : string = 'Hello ';

  loggedin : string = 'disappear';

  loginstate : string = 'topnav-right';

  navstate : string="topnav";

  dropdownMenu()  {
    if (this.navstate == "topnav")
  {
    this.navstate = "topnav-responsive";
  }
  else
  {
    this.navstate ="topnav";
  }
  }

  loginstatus() {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.loginstate = 'disappear';
      this.loggedin = 'topnav-right';
      this.User = 'Hello ' + (localStorage.getItem('FirstName') || '');
      //this.router.navigate(['/mybooktickets']);
    }
    else {
      this.loginstate = 'topnav-right';
      this.loggedin = 'disappear';
    }
  }

  logout() {
    localStorage.setItem('isLoggedIn','false');
    localStorage.setItem('FirstName', 'User');
    localStorage.removeItem('AuthCustomer');
    this.loginstate = 'topnav-right';
    this.loggedin = 'disappear';
    this.router.navigate(['/login']);
  }




}
