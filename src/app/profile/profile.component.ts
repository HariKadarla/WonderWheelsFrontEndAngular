import { Component, OnInit } from '@angular/core';
import { AuthUserDetails } from '../_classes/auth-user-details';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  AuthCustomerObject! : AuthUserDetails;
  AuthUser! : AuthUserDetails

  ngOnInit(): void {
    this.AuthCustomerObject = new AuthUserDetails();
    this.AuthCustomerObject = JSON.parse(localStorage.getItem('AuthCustomer') || '');
  }

  Binding() {

  }

}
