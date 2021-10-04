import { Component, OnInit } from '@angular/core';
import { Buses } from '../_classes/buses';
import { BusDetailsService } from '../_services/bus-details.service';
import { Router } from '@angular/router';
import { Unauthcustomerbookingdetails } from '../_services/unauthcustomerbookingdetails.service';
import { UnauthCustomerbookingdetails } from '../_classes/unauth-customerbookingdetails';
import { Unauthcustomerdetails } from '../_classes/unauthcustomerdetails';
import { AuthcustomerbookingdetailsService } from '../_services/authcustomerbookingdetails.service';
import { AuthCustomerbookingdetails } from '../_classes/auth-customerbookingdetails';
import { UnauthcustomerdetailsService } from '../_services/unauthcustomerdetails.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  unauthcustObject! : Unauthcustomerdetails;
  unauthcustBookingObject! : UnauthCustomerbookingdetails;
  loginstatus : string = '';
  authcustBookingObject! : AuthCustomerbookingdetails;
  //Toatal Fare TotalBookedSeats Seatids ticket Price
  TotalFare : number=0;
  TotalBookedSeats : number = 0;
  SeatIds! : string;
  TicketPrice: number = 0;
  FirstName : string='';
  EmailId : string='';


  constructor(private service: BusDetailsService,
    private router: Router,
    private unauthservice: Unauthcustomerbookingdetails,
    private authservice: AuthcustomerbookingdetailsService,
    private unauthcustormerservice: UnauthcustomerdetailsService) { }

  bus! : Buses;

  ngOnInit(): void {
    console.log(localStorage.getItem('RefreshCount') == '1');
    if (localStorage.getItem('RefreshCount') == '1')
    {
      localStorage.setItem('RefreshCount','0');
      window.location.reload();
    }
    else 
    {
      localStorage.setItem('RefreshCount','1');
    }
    this.bus = JSON.parse(localStorage.getItem('Bus') || '');
    this.unauthcustBookingObject = new UnauthCustomerbookingdetails();
    this.unauthcustObject = new Unauthcustomerdetails();
    this.authcustBookingObject = new AuthCustomerbookingdetails();
    this.TicketPrice = parseInt(localStorage.getItem('TicketPrice') || "");
    this.TotalBookedSeats = parseInt(localStorage.getItem('TotalBookedSeats') || "");
    this.SeatIds = localStorage.getItem('SeatIds') || "";
    this.SeatIds = this.SeatIds.slice(1,-1);
    this.TotalFare = this.TotalBookedSeats * this.TicketPrice;
    this.EmailId = localStorage.getItem('EmailId') || '';
    this.FirstName = localStorage.getItem('FirstName') || '';
  }

  confirmpayment() {
    this.service.updatebus(this.bus.BusId,this.bus).subscribe();
    this.loginstatus = localStorage.getItem('isLoggedIn') || '';
    if (this.loginstatus == 'true') {
      this.authcustBookingObject.CustomerId = parseInt(localStorage.getItem('CustomerId') || '');
      this.authcustBookingObject.BusId = this.bus.BusId;
      this.authcustBookingObject.RouteId = parseInt(localStorage.getItem('RouteId') || '');
      this.authcustBookingObject.DepartureTime = this.bus.DepartureTime;
      this.authcustBookingObject.DepartureDate = this.bus.DepartureDate;
      this.authcustBookingObject.DepartureTime = this.bus.DepartureTime;
      this.authcustBookingObject.ArrivalDate = this.bus.ArrivalDate;
      this.authcustBookingObject.ArrivalTime = this.bus.ArrivalTime;
      this.authcustBookingObject.TicketType = (localStorage.getItem('tickettype') || "");
      this.authcustBookingObject.NoOfSeats = parseInt(localStorage.getItem('TotalBookedSeats') || "");
      this.authcustBookingObject.SeatIds = (localStorage.getItem('SeatIds') || "");
      this.authcustBookingObject.TotalPrice = (this.authcustBookingObject.NoOfSeats * parseInt(localStorage.getItem('TicketPrice') || ""));
      this.TotalFare = this.authcustBookingObject.TotalPrice;
      this.authcustBookingObject.DriverId = this.bus.DriverId;
      this.authcustBookingObject.TripStatus = "Cancellable";
      this.authservice.addNewBooking(this.authcustBookingObject).subscribe(res=>{
        console.log(this.authcustBookingObject);
      });
      this.router.navigate(['/mybookings']);
    }
    else {
      this.unauthcustObject = JSON.parse(localStorage.getItem('Customer') || '');
      this.unauthcustBookingObject.Email = this.unauthcustObject.Email;
      this.unauthcustBookingObject.Name = this.unauthcustObject.Name;
      this.unauthcustBookingObject.RouteId = parseInt(localStorage.getItem('RouteId') || '');
      this.unauthcustBookingObject.DepartureDate = this.bus.DepartureDate;
      this.unauthcustBookingObject.DepartureTime = this.bus.DepartureTime;
      this.unauthcustBookingObject.ArrivalDate = this.bus.ArrivalDate;
      this.unauthcustBookingObject.ArrivalTime = this.bus.ArrivalTime;
      this.unauthcustBookingObject.TicketType = (localStorage.getItem('tickettype') || "");
      this.unauthcustBookingObject.NoOfSeats = parseInt(localStorage.getItem('TotalBookedSeats') || "");
      this.unauthcustBookingObject.SeatIds = (localStorage.getItem('SeatIds') || "");
      this.unauthcustBookingObject.TotalPrice = (this.unauthcustBookingObject.NoOfSeats * parseInt(localStorage.getItem('TicketPrice') || ""));
      this.TotalFare = this.unauthcustBookingObject.TotalPrice;
      this.unauthcustBookingObject.DriverId = this.bus.DriverId;
      this.unauthcustBookingObject.TripStatus = "Cancellable";
      this.unauthservice.addNewBooking(this.unauthcustBookingObject).subscribe(res=>{
        console.log(this.unauthcustBookingObject);
      });
      this.unauthcustormerservice.addNewUnAuthCustomer(this.unauthcustObject).subscribe(res=>{
        console.log(this.unauthcustObject);
        alert("Your Seats are Reserved Sucessfully! Your Ticket will be sent to your mail.");
      });
      this.router.navigate(['/wonderwheels']);
    }
    
  }

}
