import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


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

}
