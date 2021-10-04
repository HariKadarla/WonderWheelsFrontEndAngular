import { Component, OnInit } from '@angular/core';
import { Coach } from '../_classes/coach';
import { CoachfetchService } from '../_services/coachfetch.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coachdetails',
  templateUrl: './coachdetails.component.html',
  styleUrls: ['./coachdetails.component.css']
})
export class CoachdetailsComponent implements OnInit {
  constructor(private router: Router, private coachbusservice: CoachfetchService) { }


  CoachBusObject!: Coach;
  RouteId: number = 0;
  id!: string;
  DepartureDate!: string;
  InvestmentPerTrip: number = 0;


  Coach: any = [];
  ngOnInit(): void {
    this.CoachBusObject = new Coach();
    this.id = (localStorage.getItem('InvestmentPerTrip') || '');
    this.InvestmentPerTrip = parseInt(this.id);
    this.id = (localStorage.getItem('RouteId') || '');
    this.RouteId = parseInt(this.id);
    this.DepartureDate = (localStorage.getItem('DepartureDate') || '');

    this.CoachBusObject.RouteId = this.RouteId;
    this.CoachBusObject.DepartureDate = this.DepartureDate;
    this.GetMyCoachBusesDetails();
  }

  GetMyCoachBusesDetails() {

    this.coachbusservice.ServiceMethodGetCoachBusesDetails(this.CoachBusObject).subscribe(data => { this.Coach = data; });

  }

  CoachBookClick(cb:Coach) {
    localStorage.setItem('CoachBus',JSON.stringify(cb));
    localStorage.setItem('RouteId',JSON.stringify(this.RouteId));
    this.router.navigate(['/payment']);

  }
}