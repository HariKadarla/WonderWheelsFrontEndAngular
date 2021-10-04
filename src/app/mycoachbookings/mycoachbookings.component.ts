import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../_services/routes.service'; 
import { AuthcustomercoachbookingfetchService } from '../_services/authcustomercoachbookingfetch.service';
import { Coachreservationbusdetails } from '../_classes/coachreservationbusdetails';
import { Coach } from '../_classes/coach';
import { CoachreservationbusdetailsService } from '../_services/coachreservationbusdetails.service';

@Component({
  selector: 'app-mycoachbookings',
  templateUrl: './mycoachbookings.component.html',
  styleUrls: ['./mycoachbookings.component.css']
})
export class MycoachbookingsComponent implements OnInit {

   constructor(private service : AuthcustomercoachbookingfetchService, 
    private RouteService : RoutesService, 
    private coachbusservice: CoachreservationbusdetailsService) { }


  AuthCustcoachBookingObject! : Coachreservationbusdetails;
  RouteList : any = [];
  CoachBookings : any = [];
  //seatids : any = [];
  seatids! : string[];
  coachbus! : Coach;
  coachbus1! : Coach;
  temp! : string;

  ngOnInit(): void {
    this.coachbus = new Coach();
    this.AuthCustcoachBookingObject = new Coachreservationbusdetails();
    this.AuthCustcoachBookingObject.CustomerId = parseInt( localStorage.getItem('CustomerId') || '' );
    this.AuthCustcoachBookingObject.SecurityDeposit = "Yes";
    //this.AuthCustcoachBookingObject.WithDriver = "Yes";
    //this.AuthCustcoachBookingObject.ReservationId = 0;
    this.GetBookingDetails();

  }

  GetBookingDetails() {
    
    this.service.ServiceMethodGetBookingDetails(this.AuthCustcoachBookingObject).subscribe(
      res => {
        //localStorage.
        this.CoachBookings = res;
        if (res!=null){
          console.log("bookingfetch successful");
          console.log(res)
          this.CoachBookings.reverse();
          console.log(this.CoachBookings);
        }

      }
    );

    this.RouteService.ServiceMethodGetAllRoutes().subscribe(
      res => {
        this.RouteList = res;
      }
    )
  }
  CancelClick(cb:any) {
    console.log(cb);

  }


  PrintClick(cb:any) {

  }
}

  /*CancelClick(cb:Coachreservationbusdetails) {
    console.log(cb.CoachBusId);
    this.busservice.searchbusById (cb.CoachBusId).subscribe((res: Coach) => {
      this.coachbus = res;
      this.coachbus1 = res;
      localStorage.setItem('NonEditedBus',JSON.stringify(this.coachbus1));
    }*/
  


