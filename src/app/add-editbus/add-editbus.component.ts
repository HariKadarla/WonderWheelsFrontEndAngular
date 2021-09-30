import { Component, Input, OnInit } from '@angular/core';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-add-editbus',
  templateUrl: './add-editbus.component.html',
  styleUrls: ['./add-editbus.component.css']
})
export class AddEditbusComponent implements OnInit {
  @Input() bus = {
    BusId: 0,
    RouteId: 0,
    //Source: '',
    //Destination: '',
    TotalSeats: 0,
    FilledSeats: 0,
    Status: '',
    DepartureDate: '',
    DepartureTime: '',
    ArrivalDate: '',
    ArrivalTime: '',
    DriverId: 0,
    // name: ''
  }

  BusId: number = 0;
  RouteId: number = 0;
  //Source: string = '';
  //Destination: string = '';
  TotalSeats: number = 0;
  FilledSeats: number = 0;
  Status: string = '';
  DepartureDate: string = '';
  DepartureTime: string = '';
  ArrivalDate: string = '';
  ArrivalTime: string = '';
  DriverId: number = 0;
  //name: string = ''

  BusList: any = [];

  constructor(private routeService: BusDetailsService) { }

  ngOnInit(): void {
    this.BusId = this.bus.BusId;
    this.RouteId = this.bus.RouteId;
    //this.Source = this.bus.Source;
    //this.Destination = this.bus.Destination;
    this.TotalSeats = this.bus.TotalSeats;
    this.FilledSeats = this.bus.FilledSeats;
    this.Status = this.bus.Status;
    this.DepartureDate = this.bus.DepartureDate;
    this.DepartureTime = this.bus.DepartureTime;
    this.ArrivalDate = this.bus.ArrivalDate;
    this.ArrivalTime = this.bus.ArrivalTime;
    this.DriverId = this.bus.DriverId;
    //this.name = this.bus.name;



  }

  GetBusList() {

    this.routeService.ServiceMethodGetAllBuses().subscribe(data => { this.BusList = data; });

  }

  AddBus() {
    var busObject = {
      BusId: this.BusId,
      RouteId: this.RouteId,
      //Source: this.Source,
      //Destination: this.Destination,
      TotalSeats: this.TotalSeats,
      FilledSeats: this.FilledSeats,
      Status: this.Status,
      DepartureDate: this.DepartureDate,
      DepartureTime: this.DepartureTime,
      ArrivalDate: this.ArrivalDate,
      ArrivalTime: this.ArrivalTime,
      DriverId: this.DriverId
      //name: this.name
    };
    this.routeService.addNewbus(busObject).subscribe(res => {
      alert(res.toString());
    });
  }

  UpdateBus() {
    var busObject = {
      BusId: this.BusId,
      RouteId: this.RouteId,
      //Source: this.Source,
      //Destination: this.Destination,
      TotalSeats: this.TotalSeats,
      FilledSeats: this.FilledSeats,
      Status: this.Status,
      DepartureDate: this.DepartureDate,
      DepartureTime: this.DepartureTime,
      ArrivalDate: this.ArrivalDate,
      ArrivalTime: this.ArrivalTime,
      DriverId: this.DriverId
      //name: this.name
    };
    if (window.confirm('Are you sure, you want to Update?')) {
      this.routeService.updatebus(busObject.BusId, busObject).subscribe(data => { this.BusList = data; });
    }
  }

}
