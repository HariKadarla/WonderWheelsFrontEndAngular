import { Component, OnInit } from '@angular/core';
//Added.....
import { AuthUserDetails } from '../_classes/auth-user-details';
import { UserauthService } from '../_services/userauth.service';
import { Router } from '@angular/router';  
import { AuthCustomerDetailsService } from '../_services/auth-customer-details.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  AuthUserObject! : AuthUserDetails;
  UserObject! : AuthUserDetails;
  constructor(private service : UserauthService,  private router: Router, private signupservice : AuthCustomerDetailsService ) { }
  FirstName : string = '';
  id!: number;
  ids!: string;
  SignupUserObject! : AuthUserDetails;
 
  ngOnInit(): void {
    this.AuthUserObject = new AuthUserDetails();
    this.SignupUserObject = new AuthUserDetails();
  }

  CheckUser() {
    console.log(this.AuthUserObject);
    this.service.ServiceMethodGetUserDetails(this.AuthUserObject)
    .subscribe (res =>
    { //const loggedUserEmail = (res).LoginId;
      localStorage.setItem ('FirstName', res.FirstName);
      localStorage.setItem('EmailId', res.Email);
      this.UserObject = res;
      console.log (this.UserObject);
      this.FirstName = this.UserObject.FirstName;
      if (this.UserObject.FirstName!=''){
        console.log("Login successful");
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('CustomerId',JSON.stringify(res.CustomerId));
        this.ids = (localStorage.getItem('CustomerId') || '');
        this.id = parseInt(this.ids);
        console.log(this.id);
        localStorage.setItem('AuthCustomer',JSON.stringify(this.UserObject));
        this.router.navigate(['/mybooktickets']);
      }
     } );
    
  }

  UserSignUp() {
    this.SignupUserObject.Email = this.SignupUserObject.LoginId;
    console.log(this.SignupUserObject);
    this.signupservice.addNewUser(this.SignupUserObject).subscribe(
      res => { 
        if (res.LoginId != null) {
          console.log('SignUp Successfull Login again to continue..');
          console.log(res);
          alert("SignUp Sucessful Please Login Now!");
          //this.SignupUserObject = new AuthUserDetails();
        }
      }
    );

    //window.location.reload();
  }


  
}
