import { Component, OnInit } from '@angular/core';
import { AuthcustomerbookingfetchService } from '../_services/authcustomerbookingfetch.service';
import { AuthCustomerbookingdetails } from '../_classes/auth-customerbookingdetails';
import { RoutesService } from '../_services/routes.service';
import { BusDetailsService } from '../_services/bus-details.service';
import { Buses } from '../_classes/buses';
import { AuthcustomerbookingdetailsService} from '../_services/authcustomerbookingdetails.service'

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  constructor(private service : AuthcustomerbookingfetchService, private RouteService : RoutesService, private busservice: BusDetailsService, private authcustservice: AuthcustomerbookingdetailsService) { }


  AuthCustBookingObject! : AuthCustomerbookingdetails;
  RouteList : any = [];
  AuthCustBookings : any = [];
  //seatids : any = [];
  seatids! : string[];
  bus! : Buses;
  bus1! : Buses;
  temp! : string;

  ngOnInit(): void {
    this.bus = new Buses();
    this.bus1 = new Buses();
    this.AuthCustBookingObject = new AuthCustomerbookingdetails();
    this.AuthCustBookingObject.CustomerId = parseInt( localStorage.getItem('CustomerId') || '' );
    this.GetBookingDetails();

  }

  GetBookingDetails() {
    
    this.service.ServiceMethodGetBookingDetails(this.AuthCustBookingObject).subscribe(
      res => {
        //localStorage.
        this.AuthCustBookings = res;
        if (res!=null){
          console.log("bookingfetch successful");
          this.AuthCustBookings.reverse();
          console.log(this.AuthCustBookings);
        }

      }
    );

    this.RouteService.ServiceMethodGetAllRoutes().subscribe(
      res => {
        this.RouteList = res;
      }
    )
  }

  PrintClick(b:any) {

  }

  CancelClick(b:AuthCustomerbookingdetails) {
    console.log(b.BusId);
    this.busservice.searchbusById (b.BusId).subscribe((res: Buses) => {
      this.bus = res;
      this.bus1 = res;
      localStorage.setItem('NonEditedBus',JSON.stringify(this.bus1));

    this.temp = b.SeatIds.slice(1,-1);
    this.seatids = this.temp.split(",");
    for (let seat of this.seatids) {
      console.log(seat);
      if (seat == "S1") {
        this.bus.Seat1 = "string";
    }
if (seat == "S2") {
        this.bus.Seat2 = "string";
    }
if (seat == "S3") {
        this.bus.Seat3 = "string";
    }
if (seat == "S4") {
        this.bus.Seat4 = "string";
    }
if (seat == "S5") {
        this.bus.Seat5 = "string";
    }
if (seat == "S6") {
        this.bus.Seat6 = "string";
    }
if (seat == "S7") {
        this.bus.Seat7 = "string";
    }
if (seat == "S8") {
        this.bus.Seat8 = "string";
    }
if (seat == "S9") {
        this.bus.Seat9 = "string";
    }
if (seat == "S10") {
        this.bus.Seat10 = "string";
    }
if (seat == "S11") {
        this.bus.Seat11 = "string";
    }
if (seat == "S12") { 
        this.bus.Seat12 = "string";
    }
if (seat == "S13") {
        this.bus.Seat13 = "string";
    }
if (seat == "S14") {
        this.bus.Seat14 = "string";
    }
if (seat == "S15") {
        this.bus.Seat15 = "string";
    }
if (seat == "S16") {
        this.bus.Seat16 = "string";
    }
if (seat == "S17") {
        this.bus.Seat17 = "string";
    }
if (seat == "S18") {
        this.bus.Seat18 = "string";
    }
if (seat == "S19") {
        this.bus.Seat19 = "string";
    }
if (seat == "S20") {
        this.bus.Seat20 = "string";
    }
if (seat == "S21") {
        this.bus.Seat21 = "string";
    }
if (seat == "S22") {
        this.bus.Seat22 = "string";
    }
if (seat == "S23") {
        this.bus.Seat23 = "string";
    }
if (seat == "S24") {
        this.bus.Seat24 = "string";
    }
if (seat == "S25") {
        this.bus.Seat25 = "string";
    }
if (seat == "S26") {
        this.bus.Seat26 = "string";
    }
if (seat == "S27") {
        this.bus.Seat27 = "string";
    }
if (seat == "S28") {
        this.bus.Seat28 = "string";
    }
if (seat == "S29") {
        this.bus.Seat29 = "string";
    }
if (seat == "S30") {
        this.bus.Seat30 = "string";
    }
if (seat == "S31") {
        this.bus.Seat31 = "string";
    }
if (seat == "S32") {
        this.bus.Seat32 = "string";
    }
if (seat == "S33") {
        this.bus.Seat33 = "string";
    }
if (seat == "S34") {
        this.bus.Seat34 = "string";
    }
if (seat == "S35") {
        this.bus.Seat35 = "string";
    }
if (seat == "S36") {
        this.bus.Seat36 = "string";
    }
if (seat == "S37") {
        this.bus.Seat37 = "string";
    }
if (seat == "S38") {
        this.bus.Seat38 = "string";
    }
if (seat == "S39") {
        this.bus.Seat39 = "string";
    }
if (seat == "S40") {
        this.bus.Seat40 = "string";
    }
  }
  console.log(this.bus);
  localStorage.setItem('EditedBus',JSON.stringify(this.bus));
  if (window.confirm('Are you sure, you want to Cancel Tickets?')) {
    this.busservice.updatebus(this.bus.BusId,this.bus).subscribe();
    this.authcustservice.deleteBooking(b.TicketId).subscribe(data => { this.GetBookingDetails(); });
  }
    });
    
    
    
  }
  
}
