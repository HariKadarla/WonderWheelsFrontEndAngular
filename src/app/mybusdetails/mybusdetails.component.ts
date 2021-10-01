import { Component, OnInit } from '@angular/core';
//Added...
import { Buses } from '../_classes/buses';
import { BusesfetchService } from '../_services/busesfetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybusdetails',
  templateUrl: './mybusdetails.component.html',
  styleUrls: ['./mybusdetails.component.css']
})
export class MybusdetailsComponent implements OnInit {

  constructor(private router: Router, private busservice: BusesfetchService) { }

  BusObject!: Buses;
  RouteId: number = 0;
  id!: string;
  DepartureDate!: string;
  tickettype!: string;

  Buses: any = [];
  TicketPrice: number = 0;



  ngOnInit(): void {
    this.BusObject = new Buses();
    this.id = (localStorage.getItem('RouteId') || '');
    this.RouteId = parseInt(this.id);
    this.id = (localStorage.getItem('TicketPrice') || '');
    this.TicketPrice = parseInt(this.id);
    this.DepartureDate = (localStorage.getItem('DepartureDate') || '');
    this.tickettype = (localStorage.getItem('tickettype') || '');
    this.BusObject.RouteId = this.RouteId;
    this.BusObject.DepartureDate = this.DepartureDate;
    this.GetMyBusesDetails();
  }

  GetMyBusesDetails() {

    this.busservice.ServiceMethodGetBusesDetails(this.BusObject).subscribe(data => { this.Buses = data; });

  }

  BookClick() {
    this.router.navigate(['/seatselection']);
  }


}

