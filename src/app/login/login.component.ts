import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  LoginObject! : Login;

  constructor() { }

  ngOnInit(): void {
    this.LoginObject= new Login ();
  }

  SignUpSubmit() {

    console.log(this.LoginObject);
    
  }

}
