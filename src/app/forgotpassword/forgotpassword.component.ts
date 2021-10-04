import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  AckMessage : string = "BeforeSubmit";
  Email: string= "";

  constructor() { }

  ngOnInit(): void {
  }

  DisplayAck()
  {
    this.AckMessage = "AfterSubmit";

  }
}
