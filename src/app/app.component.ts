import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserDetails } from './_classes/auth-user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WonderWheels';
  ngOnInit(): void {
    //localStorage.clear();
    //localStorage.setItem('isLoggedIn','false');
    //localStorage.setItem('FirstName', 'User');
    localStorage.setItem('RefreshCount',JSON.stringify('1'));
    this.AuthCustObject = new AuthUserDetails();
    this.loginstatus();
  }
  constructor(private router : Router) { }

  AuthCustObject! : AuthUserDetails;

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
    if (localStorage.getItem('isLoggedIn') == 'true' && (localStorage.getItem('FirstName') || '') != 'User'  ) {
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
