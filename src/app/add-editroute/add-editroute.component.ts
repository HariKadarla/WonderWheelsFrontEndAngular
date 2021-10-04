import { Component, OnInit,Input } from '@angular/core';
// Added.....
import { RoutesService } from '../_services/routes.service';

@Component({
  selector: 'app-add-editroute',
  templateUrl: './add-editroute.component.html',
  styleUrls: ['./add-editroute.component.css']
})
export class AddEditrouteComponent implements OnInit {

  @Input() route = {
   RouteId: 0,
    Source: '',
    Destination: '',
    JourneyTime: 0,
    TicketPrice: 0,
    InvestmentPerTrip: 0,
    SeatFullProfit: 0
  }

    RouteId: number=0;
    Source: string='';
    Destination: string='';
    JourneyTime: number=0;
    TicketPrice: number=0;
    InvestmentPerTrip: number=0;
    SeatFullProfit: number=0;

    RouteList: any = [];

  constructor(private routeService:RoutesService) { }

  ngOnInit(): void {
    this.RouteId=this.route.RouteId;
    this.Source=this.route.Source;
    this.Destination=this.route.Destination;
    this.JourneyTime=this.route.JourneyTime;
    this.TicketPrice=this.route.TicketPrice;
    this.InvestmentPerTrip=this.route.InvestmentPerTrip;
    this.SeatFullProfit=this.route.SeatFullProfit;

  }

  GetRouteList(){

    this.routeService.ServiceMethodGetAllRoutes().subscribe( data => { this.RouteList=data; } );

  }

  AddRoute() {
    var routeObject = {
      RouteId:this.RouteId,
      Source:this.Source,
      Destination:this.Destination,
      JourneyTime:this.JourneyTime,
      TicketPrice:this.TicketPrice,
      InvestmentPerTrip:this.InvestmentPerTrip,
      SeatFullProfit:this.SeatFullProfit
    };
    this.routeService.addNewRoute(routeObject).subscribe(res=>{
      alert("Route Added Successfully!!");
    });
  }

  UpdateRoute() {
    var routeObject = {
      RouteId:this.RouteId,
      Source:this.Source,
      Destination:this.Destination,
      JourneyTime:this.JourneyTime,
      TicketPrice:this.TicketPrice,
      InvestmentPerTrip:this.InvestmentPerTrip,
      SeatFullProfit:this.SeatFullProfit
    };
    if (window.confirm('Are you sure, you want to Update?'))
  {
    this.routeService.updateRoute(routeObject.RouteId, routeObject).subscribe( data => { this.RouteList=data; } );
  }
  }

}
