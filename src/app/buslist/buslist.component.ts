import { Component, OnInit } from '@angular/core';
//added.............................
import { BusDetailsService } from '../_services/bus-details.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private service: BusDetailsService) { }

  ModalTitle: String = '';
  BusList: any = [];
  bus: any;
  ActivateAddEditBusComponent: boolean = false;

  GetBusList() {
    this.service.ServiceMethodGetAllBuses().subscribe(data => { this.BusList = data });
  }
  AddClick() {
    this.bus = {
      BusId: 0,
      RouteId: 0,
      // Source: '',
      // Destination: '',
      TotalSeats: 0,
      FilledSeats: 0,
      Status: '',
      DepartureDate: '',
      DepartureTime: '',
      ArrivalDate: '',
      ArrivalTime: '',
      DriverId: 0
      //name: ''
    }
    this.ModalTitle = 'Add Bus';
    this.ActivateAddEditBusComponent = true;
  }

  UpdateClick(b: any) {
    this.bus = {
      BusId: b.BusId,
      RouteId: b.RouteId,
      // Source: b.Source,
      //Destination: b.Destination,
      TotalSeats: b.TotalSeats,
      FilledSeats: b.FilledSeats,
      Status: b.Status,
      DepartureDate: b.DepartureDate,
      DepartureTime: b.DepartureTime,
      ArrivalDate: b.ArrivalDate,
      ArrivalTime: b.ArrivalTime,
      DriverId: b.DriverId
      //name: b.name
    }
    this.ModalTitle = 'Update Bus';
    this.ActivateAddEditBusComponent = true;
  }

  CloseClick() {
    this.ActivateAddEditBusComponent = false;
    this.GetBusList();
  }

  ngOnInit(): void {
    this.GetBusList();
  }

  DeleteClick(busId: number) { 
    console.log(busId);
    if (window.confirm('Are you sure, you want to delete?')) {
      this.service.deletebus(busId).subscribe(data => { this.GetBusList() });
    }
  }
}
