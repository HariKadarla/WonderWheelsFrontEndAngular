import { Component, OnInit } from '@angular/core';
//Added.....
import { AuthUserDetails } from '../_classes/auth-user-details';
import { UserauthService } from '../_services/userauth.service';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  AuthUserObject! : AuthUserDetails;
  UserObject! : AuthUserDetails;
  constructor(private service : UserauthService,  private router: Router) { }
  FirstName : string = '';

  ngOnInit(): void {
    this.AuthUserObject = new AuthUserDetails();
  }

  CheckUser() {
    console.log(this.AuthUserObject);
    this.service.ServiceMethodGetUserDetails(this.AuthUserObject)
    .subscribe (res =>
    { //const loggedUserEmail = (res).LoginId;
      localStorage.setItem ('FirstName', (res).FirstName);
      this.UserObject = res;
      console.log (this.UserObject);
      this.FirstName = this.UserObject.FirstName;
      if (this.FirstName!=''){
        console.log("Login successful");
        localStorage.setItem('isLoggedIn', "true");
        this.router.navigate(['/mydashboard']);
      }
     } );
    
  }
  
}
