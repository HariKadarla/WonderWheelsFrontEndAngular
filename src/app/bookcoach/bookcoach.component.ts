import { Component, OnInit } from '@angular/core';
import { Routes } from '../_classes/routes';
import { RoutefetchService } from '../_services/routefetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcoach',
  templateUrl: './bookcoach.component.html',
  styleUrls: ['./bookcoach.component.css']
})
export class BookcoachComponent implements OnInit {

  constructor(private service: RoutefetchService, private router: Router) { }

  RouteObject!: Routes;
  ReturnRoute!: Routes;
  RouteId!: number;
  InvestmentPerTrip: number = 0;
  DepartureDate!: string;
  withdriver!: string;
  ReturnDate!: string;

  ngOnInit(): void {
    this.RouteObject = new Routes();
    this.ReturnRoute = new Routes();
    localStorage.setItem('isBookCoach','true');
  }

  GetMyCoachBuses() {
    console.log(this.RouteObject);
    this.service.ServiceMethodGetRouteDetails(this.RouteObject).subscribe(
      res => {
        this.RouteId = res.RouteId;
        this.InvestmentPerTrip = res.InvestmentPerTrip;
        if (this.RouteId != null) {
          console.log("routefetch successful");
          this.ReturnRoute = res;
          console.log(this.ReturnRoute);
          console.log(this.RouteId);
        }
        localStorage.setItem('RouteId', JSON.stringify(this.RouteId));
        localStorage.setItem('InvestmentPerTrip', JSON.stringify(this.InvestmentPerTrip));
        localStorage.setItem('DepartureDate', this.DepartureDate);
        localStorage.setItem('WithDriver', this.withdriver);
        localStorage.setItem('Source',this.ReturnRoute.Source);
        localStorage.setItem('Destination',this.ReturnRoute.Destination);
        localStorage.setItem('ReturnDate', this.ReturnDate);

        if (this.RouteId != 0) {
          this.router.navigate(['/coachdetails'])
        }
      }
    );


  }

}

