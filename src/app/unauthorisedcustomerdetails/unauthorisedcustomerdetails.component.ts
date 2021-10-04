import { Component, Input, OnInit } from '@angular/core';
//Added......
import { Unauthcustomerdetails } from '../_classes/unauthcustomerdetails';
import { Router } from '@angular/router';
import { Buses } from '../_classes/buses';

@Component({
  selector: 'app-unauthorisedcustomerdetails',
  templateUrl: './unauthorisedcustomerdetails.component.html',
  styleUrls: ['./unauthorisedcustomerdetails.component.css']
})
export class UnauthorisedcustomerdetailsComponent implements OnInit {

  unauthcustObject! : Unauthcustomerdetails;

  ActivateseatselectionComponent: boolean = false;

  bus1! : Buses;

  @Input() bus = this.bus1;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.unauthcustObject = new Unauthcustomerdetails();
    this.bus1 = this.bus;
  }

  Continue() {
    localStorage.setItem('CustomerId',this.unauthcustObject.Email);
    localStorage.setItem('EmailId',this.unauthcustObject.Email);
    localStorage.setItem('FirstName',this.unauthcustObject.Name);
    localStorage.setItem('Customer',JSON.stringify(this.unauthcustObject));
    this.ActivateseatselectionComponent = true;
    //this.router.navigate(['/seatselection']);
  }

  CloseClick() {
    this.router.navigate(['/busdetails']);
  }

}
