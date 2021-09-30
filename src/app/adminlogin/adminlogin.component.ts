import { Component, OnInit } from '@angular/core';
import { AuthAdminDetails } from '../_classes/auth-admin-details';
import { AdminauthService } from '../_services/adminauth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  AuthAdminObject!: AuthAdminDetails;
  AdminObject!: AuthAdminDetails;
  constructor(private service: AdminauthService, private router: Router) { }
  Name: string = '';

  ngOnInit(): void {
    this.AuthAdminObject = new AuthAdminDetails();
  }

  CheckAdmin() {
    console.log(this.AuthAdminObject);
    this.service.ServiceMethodGetAdminDetails(this.AuthAdminObject)
      .subscribe(res => { //const loggedUserEmail = (res).LoginId;
        localStorage.setItem('Name', (res).Name);
        this.AdminObject = res;
        console.log(this.AdminObject);
        this.Name = this.AdminObject.Name;
        if (this.Name != '') {
          console.log("Login successful");
          localStorage.setItem('isLoggedIn', "true");
          this.router.navigate(['/admindashboard']);
        }
      });

  }

}

