import { Component, OnInit } from '@angular/core';
import { Routes } from '../_classes/routes';

import { RoutefetchService } from '../_services/routefetch.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

  constructor(private service: RoutefetchService, private router : Router ) { }

  RouteObject! : Routes;
  ReturnRoute! : Routes;
  RouteId : number = 0;
  TicketPrice: number = 0;
  DepartureDate!: string;
  tickettype!: string;

  ngOnInit(): void {
    this.RouteObject = new Routes();
    this.ReturnRoute = new Routes();

  }

  GetBuses(){
    console.log(this.RouteObject);
    this.service.ServiceMethodGetRouteDetails(this.RouteObject).subscribe(
      res => {
        //localStorage.
        this.RouteId = res.RouteId;
        this.TicketPrice = res.TicketPrice;
        if (this.RouteId!=null){
          console.log("routefetch successful");
          this.ReturnRoute = res;
          console.log(this.ReturnRoute);
          console.log(this.RouteId);
        }
        console.log(this.ReturnRoute.InvestmentPerTrip);

    localStorage.setItem('RouteId',JSON.stringify(this.RouteId));
    localStorage.setItem('TicketPrice',JSON.stringify(this.TicketPrice));
    localStorage.setItem('DepartureDate',this.DepartureDate);
    localStorage.setItem('tickettype',this.tickettype);
    console.log(this.DepartureDate);

    if (this.RouteId!= 0) {
      this.router.navigate(['/busdetails'])
    }
      }
    );
    

  }

}
