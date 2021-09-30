import { Component, OnInit } from '@angular/core';
//Added...........
import { RoutesService } from '../routes.service';


@Component({
  selector: 'app-routeslist',
  templateUrl: './routeslist.component.html',
  styleUrls: ['./routeslist.component.css']
})
export class RouteslistComponent implements OnInit {

  constructor(private service:RoutesService) { }

  ModalTitle:String='';
  RouteList: any = [];
  route : any;
  ActivateAddEditRouteComponent:boolean=false;

  GetRouteList(){

    this.service.ServiceMethodGetAllRoutes().subscribe( data => { this.RouteList=data; } );

  }

  AddClick(){
    this.route={
      RouteId: 0,
      Source: '',
      Destination: '',
      JourneyTime: 0,
      TicketPrice: 0,
      InvestmentPerTrip: 0,
      SeatFullProfit: 0
    }
    this.ModalTitle = 'Add Route';
    this.ActivateAddEditRouteComponent = true;
  }

  UpdateClick(r:any){
    this.route={
      RouteId: r.RouteId,
    Source: r.Source,
    Destination: r.Destination,
    JourneyTime: r.JourneyTime,
    TicketPrice:  r.TicketPrice,
    InvestmentPerTrip: r.InvestmentPerTrip,
    SeatFullProfit: r.SeatFullProfit
    }
    this.ModalTitle = 'Update Route';
    this.ActivateAddEditRouteComponent = true;
  }

  CloseClick(){
    this.ActivateAddEditRouteComponent = false;
    this.GetRouteList();
  }

  ngOnInit(): void {
    this.GetRouteList();
}

DeleteClick(RouteId:number)
{
  if (window.confirm('Are you sure, you want to delete?'))
  {
  this.service.deleteRoute(RouteId).subscribe(data => { this.GetRouteList()});
  }
}


  
}
