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

//Added..
import { Coach } from '../_classes/coach';
import { CoachfetchService } from '../_services/coachfetch.service';
import { Coachreservationbusdetails } from '../_classes/coachreservationbusdetails';
import { CoachreservationbusdetailsService } from '../_services/coachreservationbusdetails.service';
import { Coachreservationdetails } from '../_classes/coachreservationdetails';
import { CoachreservationdetailsService } from '../_services/coachreservationdetails.service';


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

  //Added..
  coachreservationObject! : Coachreservationdetails;
  coachbus! : Coach;


  constructor(private service: BusDetailsService,
    private router: Router,
    private unauthservice: Unauthcustomerbookingdetails,
    private authservice: AuthcustomerbookingdetailsService,
    private unauthcustormerservice: UnauthcustomerdetailsService,
    //Added..
    private  cfservice: CoachfetchService,
    private coachservice: CoachreservationdetailsService
    ) { }

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
    //Added....
    this.coachbus = JSON.parse(localStorage.getItem('CoachBus') || '');
    this.coachreservationObject = new Coachreservationdetails();
  }

  confirmpayment() {
    this.service.updatebus(this.bus.BusId,this.bus).subscribe();
    this.loginstatus = localStorage.getItem('isLoggedIn') || '';
    if (this.loginstatus == 'true') {
      if ('true' == (localStorage.getItem('isBookCoach'))) {
        localStorage.setItem('isBookCoach','false');
        //Added.......
      //this.service.updatecoachbus(this.coachbus.CoachBusId,this.coachbus).subscribe();
      this.coachreservationObject.CustomerId = parseInt(localStorage.getItem('CustomerId') || '');
      this.coachreservationObject.WithDriver = (localStorage.getItem('WithDriver') || '');
      this.coachreservationObject.CoachBusId = this.coachbus.CoachBusId;
      this.coachreservationObject.Source = (localStorage.getItem('Source') || '');
      this.coachreservationObject.Destination = (localStorage.getItem('Destination') || '');
      this.coachreservationObject.DepartureDate = this.coachbus.DepartureDate;
      this.coachreservationObject.DepartureTime = this.coachbus.DepartureTime;
      this.coachreservationObject.ArrivalDate = this.coachbus.ArrivalDate;
      this.coachreservationObject.ArrivalTime = this.coachbus.ArrivalTime;
      this.coachreservationObject.OutDate = this.coachbus.DepartureDate;
      this.coachreservationObject.InDate = (localStorage.getItem('ReturnDate') || '');
      this.coachreservationObject.Price = 10000; 
      this.coachreservationObject.SecurityDeposit = "Yes";
      this.coachreservationObject.DepositAmount = 50000;
      this.coachservice.addNewreservation(this.coachreservationObject).subscribe(res=>{
        alert("Coach Reserved Successfully!!");
      });
      this.router.navigate(['/mycoachbookings'])
      }
      else {
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
