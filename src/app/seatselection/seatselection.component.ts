import { Component, OnInit } from '@angular/core';
import { Buses } from '../_classes/buses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {

  bus! : Buses;

  //@Input() bus = this.bus1;
  CustomerId! : string;

  seatsbooked : number = 0;
  BookedSeatIds: string ="Seats";


  Status1 : string = "disabled";
  Status2 : string = "disabled";
  Status3 : string = "disabled";
  Status4 : string = "disabled";
  Status5 : string = "disabled";
  Status6 : string = "disabled";
  Status7 : string = "disabled";
  Status8 : string = "disabled";
  Status9 : string = "disabled";
  Status10 : string = "disabled";
  Status11 : string = "disabled";
  Status12 : string = "disabled";
  Status13 : string = "disabled";
  Status14 : string = "disabled";
  Status15 : string = "disabled";
  Status16 : string = "disabled";
  Status17 : string = "disabled";
  Status18 : string = "disabled";
  Status19 : string = "disabled";
  Status20 : string = "disabled";
  Status21 : string = "disabled";
  Status22 : string = "disabled";
  Status23 : string = "disabled";
  Status24 : string = "disabled";
  Status25 : string = "disabled";
  Status26 : string = "disabled";
  Status27 : string = "disabled";
  Status28 : string = "disabled";
  Status29 : string = "disabled";
  Status30 : string = "disabled";
  Status31 : string = "disabled";
  Status32 : string = "disabled";
  Status33 : string = "disabled";
  Status34 : string = "disabled";
  Status35 : string = "disabled";
  Status36 : string = "disabled";
  Status37 : string = "disabled";
  Status38 : string = "disabled";
  Status39 : string = "disabled";
  Status40 : string = "disabled";

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.bus1 = this.bus;
    this.bus = JSON.parse(localStorage.getItem('Bus') || '');
    this.seatsbooked = this.bus.FilledSeats;
    this.CustomerId = (localStorage.getItem('CustomerId') || '');
    this.SeatStatus();

  }

  SeatStatus() {
    if ((this.bus.Seat1 != (null)) && (this.bus.Seat1 != ("string")) && (this.bus.Seat1 != (""))) {
      this.Status1 = "enabled";
    }
    if ((this.bus.Seat2 != (null)) && (this.bus.Seat2 != ("string")) && (this.bus.Seat2 != (""))) {
      this.Status2 = "enabled";
    }
    if ((this.bus.Seat3 != (null)) && (this.bus.Seat3 != ("string")) && (this.bus.Seat3 != (""))) {
      this.Status3 = "enabled";
    }
    if ((this.bus.Seat4 != (null)) && (this.bus.Seat4 != ("string")) && (this.bus.Seat4 != (""))) {
      this.Status4 = "enabled";
    }
if ((this.bus.Seat5 != (null)) && (this.bus.Seat5 != ("string")) && (this.bus.Seat5 != (""))) {
      this.Status5 = "enabled";
    }
if ((this.bus.Seat6 != (null)) && (this.bus.Seat6 != ("string")) && (this.bus.Seat6 != (""))) {
      this.Status6 = "enabled";
    }
if((this.bus.Seat7 != (null)) && (this.bus.Seat7 != ("string")) && (this.bus.Seat7 != (""))) {
      this.Status7 = "enabled";
    }
if ((this.bus.Seat8 != (null)) && (this.bus.Seat8 != ("string")) && (this.bus.Seat8 != (""))) {
      this.Status8 = "enabled";
    }
if((this.bus.Seat9 != (null)) && (this.bus.Seat9 != ("string")) && (this.bus.Seat9 != (""))) {
      this.Status9 = "enabled";
    }
    if ((this.bus.Seat10 != (null)) && (this.bus.Seat10 != ("string")) && (this.bus.Seat10 != (""))) {
      this.Status10 = "enabled";
    }
    if ((this.bus.Seat11 != (null)) && (this.bus.Seat11 != ("string")) && (this.bus.Seat11!= (""))) {
      this.Status11 = "enabled";
    }
    if ((this.bus.Seat12 != (null)) && (this.bus.Seat12 != ("string")) && (this.bus.Seat12 != (""))) {
      this.Status12 = "enabled";
    }
    if ((this.bus.Seat13 != (null)) && (this.bus.Seat13 != ("string")) && (this.bus.Seat13 != (""))) {
      this.Status13 = "enabled";
    }
    if ((this.bus.Seat14 != (null)) && (this.bus.Seat14 != ("string")) && (this.bus.Seat14 != (""))) {
      this.Status14 = "enabled";
    }
    if ((this.bus.Seat15 != (null)) && (this.bus.Seat15 != ("string")) && (this.bus.Seat15 != (""))) {
      this.Status15 = "enabled";
    }
    if ((this.bus.Seat16 != (null)) && (this.bus.Seat16 != ("string")) && (this.bus.Seat16 != (""))) {
      this.Status16 = "enabled";
    }
    if ((this.bus.Seat17 != (null)) && (this.bus.Seat17 != ("string")) && (this.bus.Seat17 != (""))) {
      this.Status17 = "enabled";
    }
    if ((this.bus.Seat18 != (null)) && (this.bus.Seat18 != ("string")) && (this.bus.Seat18 != (""))) {
      this.Status18 = "enabled";
    }
    if ((this.bus.Seat19 != (null)) && (this.bus.Seat19 != ("string")) && (this.bus.Seat19 != (""))) {
      this.Status19 = "enabled";
    }
    if ((this.bus.Seat20 != (null)) && (this.bus.Seat20 != ("string")) && (this.bus.Seat20 != (""))) {
      this.Status20= "enabled";
    }
    if ((this.bus.Seat21 != (null)) && (this.bus.Seat21 != ("string")) && (this.bus.Seat21 != (""))) {
      this.Status21 = "enabled";
    }
    if ((this.bus.Seat22 != (null)) && (this.bus.Seat22 != ("string")) && (this.bus.Seat22 != (""))) {
      this.Status22 = "enabled";
    }
    if ((this.bus.Seat23 != (null)) && (this.bus.Seat23 != ("string")) && (this.bus.Seat23 != (""))) {
      this.Status23 = "enabled";
    }
    if ((this.bus.Seat24 != (null)) && (this.bus.Seat24 != ("string")) && (this.bus.Seat24 != (""))) {
      this.Status24 = "enabled";
    }
    if ((this.bus.Seat25 != (null)) && (this.bus.Seat25 != ("string")) && (this.bus.Seat25 != (""))) {
      this.Status25 = "enabled";
    }
    if ((this.bus.Seat26 != (null)) && (this.bus.Seat26 != ("string")) && (this.bus.Seat26 != (""))) {
      this.Status26 = "enabled";
    }
    if ((this.bus.Seat27 != (null)) && (this.bus.Seat27 != ("string")) && (this.bus.Seat27 != (""))) {
      this.Status27 = "enabled";
    }
    if ((this.bus.Seat28 != (null)) && (this.bus.Seat28 != ("string")) && (this.bus.Seat28 != (""))) {
      this.Status28 = "enabled";
    }
    if ((this.bus.Seat29 != (null)) && (this.bus.Seat29 != ("string")) && (this.bus.Seat29 != (""))) {
      this.Status29 = "enabled";
    }
    if ((this.bus.Seat30 != (null)) && (this.bus.Seat30 != ("string")) && (this.bus.Seat30 != (""))) {
      this.Status30 = "enabled";
    }
    if ((this.bus.Seat31 != (null)) && (this.bus.Seat31 != ("string")) && (this.bus.Seat31 != (""))) {
      this.Status31 = "enabled";
    }
    if ((this.bus.Seat32 != (null)) && (this.bus.Seat32 != ("string")) && (this.bus.Seat32 != (""))) {
      this.Status32 = "enabled";
    }
    if ((this.bus.Seat33 != (null)) && (this.bus.Seat33 != ("string")) && (this.bus.Seat33 != (""))) {
      this.Status33 = "enabled";
    }
    if ((this.bus.Seat34 != (null)) && (this.bus.Seat34 != ("string")) && (this.bus.Seat34 != (""))) {
      this.Status34 = "enabled";
    }
    if ((this.bus.Seat35 != (null)) && (this.bus.Seat35 != ("string")) && (this.bus.Seat35 != (""))) {
      this.Status35 = "enabled";
    }
    if ((this.bus.Seat36 != (null)) && (this.bus.Seat36 != ("string")) && (this.bus.Seat36 != (""))) {
      this.Status36 = "enabled";
    }
    if ((this.bus.Seat37 != (null)) && (this.bus.Seat37 != ("string")) && (this.bus.Seat37 != (""))) {
      this.Status37 = "enabled";
    }
    if ((this.bus.Seat38 != (null)) && (this.bus.Seat38 != ("string")) && (this.bus.Seat38 != (""))) {
      this.Status38 = "enabled";
    }
    if ((this.bus.Seat39 != (null)) && (this.bus.Seat39 != ("string")) && (this.bus.Seat39 != (""))) {
      this.Status39 = "enabled";
    }
    if ((this.bus.Seat40 != (null)) && (this.bus.Seat40 != ("string")) && (this.bus.Seat40 != (""))) {
      this.Status40 = "enabled";
    }

  }

  CheckSeat1() {
    
    if ((this.bus.Seat1 == (null)) || (this.bus.Seat1 == ("string")) || (this.bus.Seat1 == ("")))
    {
    this.bus.Seat1 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S01";
    }
    else {
      this.bus.Seat1 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }

  CheckSeat2() {
    
    if ((this.bus.Seat2 == (null)) || (this.bus.Seat2 == ("string")) || (this.bus.Seat2 == ("")))
    {
    this.bus.Seat2 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S02";
    }
    else {
      this.bus.Seat2 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }

  CheckSeat3() {
    
    if ((this.bus.Seat3 == (null)) || (this.bus.Seat3 == ("string")) || (this.bus.Seat3 == ("")))
    {
    this.bus.Seat3 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S03";
    }
    else {
      this.bus.Seat3 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
  CheckSeat4() {
    
    if ((this.bus.Seat4 == (null)) || (this.bus.Seat4 == ("string")) || (this.bus.Seat4 == ("")))
    {
    this.bus.Seat4 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S04";
    }
    else {
      this.bus.Seat4 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat5() {
    
    if ((this.bus.Seat5== (null)) || (this.bus.Seat5 == ("string")) || (this.bus.Seat5 == ("")))
    {
    this.bus.Seat5 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S05";
    }
    else {
      this.bus.Seat5 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat6() {
    
    if ((this.bus.Seat6 == (null)) || (this.bus.Seat6 == ("string")) || (this.bus.Seat6 == ("")))
    {
    this.bus.Seat6 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S06";
    }
    else {
      this.bus.Seat6 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus,this.BookedSeatIds);
  }
CheckSeat7() {
    
    if ((this.bus.Seat7 == (null)) || (this.bus.Seat7 == ("string")) || (this.bus.Seat7 == ("")))
    {
    this.bus.Seat7 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S07";
    }
    else {
      this.bus.Seat7 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat8() {
    
    if ((this.bus.Seat8 == (null)) || (this.bus.Seat8 == ("string")) || (this.bus.Seat8 == ("")))
    {
    this.bus.Seat8 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S08";
    }
    else {
      this.bus.Seat8 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat9() {
    
    if ((this.bus.Seat9 == (null)) || (this.bus.Seat9 == ("string")) || (this.bus.Seat9 == ("")))
    {
    this.bus.Seat9 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S09";
    }
    else {
      this.bus.Seat9 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat10() {
    
    if ((this.bus.Seat10 == (null)) || (this.bus.Seat10 == ("string")) || (this.bus.Seat10 == ("")))
    {
    this.bus.Seat10 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S10";
    }
    else {
      this.bus.Seat10 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat11() {
    
    if ((this.bus.Seat11 == (null)) || (this.bus.Seat11 == ("string")) || (this.bus.Seat11 == ("")))
    {
    this.bus.Seat11 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S11";
    }
    else {
      this.bus.Seat11 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat12() {
    
    if ((this.bus.Seat12 == (null)) || (this.bus.Seat12 == ("string")) || (this.bus.Seat12 == ("")))
    {
    this.bus.Seat12 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S12";
    }
    else {
      this.bus.Seat12 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat13() {
    
    if ((this.bus.Seat13 == (null)) || (this.bus.Seat13 == ("string")) || (this.bus.Seat13 == ("")))
    {
    this.bus.Seat13 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S13";
    }
    else {
      this.bus.Seat13 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat14() {
    
    if ((this.bus.Seat14 == (null)) || (this.bus.Seat14 == ("string")) || (this.bus.Seat14 == ("")))
    {
    this.bus.Seat14 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S14";
    }
    else {
      this.bus.Seat14 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat15() {
    
    if ((this.bus.Seat15 == (null)) || (this.bus.Seat15 == ("string")) || (this.bus.Seat15 == ("")))
    {
    this.bus.Seat15 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S15";
    }
    else {
      this.bus.Seat15 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat16() {
    
    if ((this.bus.Seat16 == (null)) || (this.bus.Seat16 == ("string")) || (this.bus.Seat16 == ("")))
    {
    this.bus.Seat16 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S16";
    }
    else {
      this.bus.Seat16 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat17() {
    
    if ((this.bus.Seat17 == (null)) || (this.bus.Seat17 == ("string")) || (this.bus.Seat17 == ("")))
    {
    this.bus.Seat17 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S17";
    }
    else {
      this.bus.Seat17 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat18() {
    
    if ((this.bus.Seat18 == (null)) || (this.bus.Seat18 == ("string")) || (this.bus.Seat18 == ("")))
    {
    this.bus.Seat18 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S18";
    }
    else {
      this.bus.Seat18 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat19() {
    
    if ((this.bus.Seat19 == (null)) || (this.bus.Seat19 == ("string")) || (this.bus.Seat19 == ("")))
    {
    this.bus.Seat19 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S19";
    }
    else {
      this.bus.Seat19 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat20() {
    
    if ((this.bus.Seat20 == (null)) || (this.bus.Seat20 == ("string")) || (this.bus.Seat20 == ("")))
    {
    this.bus.Seat20 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S20";
    }
    else {
      this.bus.Seat20 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat21() {
    
    if ((this.bus.Seat21 == (null)) || (this.bus.Seat21 == ("string")) || (this.bus.Seat21 == ("")))
    {
    this.bus.Seat21 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S21";
    }
    else {
      this.bus.Seat21 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
       this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat22() {
    
    if ((this.bus.Seat22 == (null)) || (this.bus.Seat22 == ("string")) || (this.bus.Seat22 == ("")))
    {
    this.bus.Seat22 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S22";
    }
    else {
      this.bus.Seat22 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
       this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat23() {
    
    if ((this.bus.Seat23 == (null)) || (this.bus.Seat23 == ("string")) || (this.bus.Seat23 == ("")))
    {
    this.bus.Seat23 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S23";
    }
    else {
      this.bus.Seat23 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat24() {
    
    if ((this.bus.Seat24 == (null)) || (this.bus.Seat24 == ("string")) || (this.bus.Seat24 == ("")))
    {
    this.bus.Seat24 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S24";
    }
    else {
      this.bus.Seat24 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat25() {
    
    if ((this.bus.Seat25 == (null)) || (this.bus.Seat25 == ("string")) || (this.bus.Seat25 == ("")))
    {
    this.bus.Seat25 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S25";
    }
    else {
      this.bus.Seat25 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat26() {
    
    if ((this.bus.Seat26 == (null)) || (this.bus.Seat26 == ("string")) || (this.bus.Seat26 == ("")))
    {
    this.bus.Seat26 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S26";
    }
    else {
      this.bus.Seat26 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat27() {
    
    if ((this.bus.Seat27 == (null)) || (this.bus.Seat27 == ("string")) || (this.bus.Seat27 == ("")))
    {
    this.bus.Seat27 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
   	this.BookedSeatIds = this.BookedSeatIds + ",S27";
    }
    else {
      this.bus.Seat27 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat28() {
    
    if ((this.bus.Seat28 == (null)) || (this.bus.Seat28 == ("string")) || (this.bus.Seat28 == ("")))
    {
    this.bus.Seat28 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
   this.BookedSeatIds = this.BookedSeatIds + ",S28";
    }
    else {
      this.bus.Seat28 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat29() {
    
    if ((this.bus.Seat29 == (null)) || (this.bus.Seat29 == ("string")) || (this.bus.Seat29 == ("")))
    {
    this.bus.Seat29 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S29";
    }
    else {
      this.bus.Seat29 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat30() {
    
    if ((this.bus.Seat30 == (null)) || (this.bus.Seat30 == ("string")) || (this.bus.Seat30 == ("")))
    {
    this.bus.Seat30 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S30";
    }
    else {
      this.bus.Seat30 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat31() {
    
    if ((this.bus.Seat31 == (null)) || (this.bus.Seat31 == ("string")) || (this.bus.Seat31 == ("")))
    {
    this.bus.Seat31 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S31";
    }
    else {
      this.bus.Seat31 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat32() {
    
    if ((this.bus.Seat32 == (null)) || (this.bus.Seat32 == ("string")) || (this.bus.Seat32 == ("")))
    {
    this.bus.Seat32 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S32";
    }
    else {
      this.bus.Seat32 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat33() {
    
    if ((this.bus.Seat33 == (null)) || (this.bus.Seat33 == ("string")) || (this.bus.Seat33 == ("")))
    {
    this.bus.Seat33 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S33";
    }
    else {
      this.bus.Seat33 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat34() {
    
    if ((this.bus.Seat34 == (null)) || (this.bus.Seat34 == ("string")) || (this.bus.Seat34 == ("")))
    {
    this.bus.Seat34 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S34";
    }
    else {
      this.bus.Seat34 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat35() {
    
    if ((this.bus.Seat35 == (null)) || (this.bus.Seat35 == ("string")) || (this.bus.Seat35 == ("")))
    {
    this.bus.Seat5 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S35";
    }
    else {
      this.bus.Seat35 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat36() {
    
    if ((this.bus.Seat36 == (null)) || (this.bus.Seat36 == ("string")) || (this.bus.Seat36 == ("")))
    {
    this.bus.Seat36 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S36";
    }
    else {
      this.bus.Seat36 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat37() {
    
    if ((this.bus.Seat37 == (null)) || (this.bus.Seat37 == ("string")) || (this.bus.Seat37 == ("")))
    {
    this.bus.Seat37 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S37";
    }
    else {
      this.bus.Seat37 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat38() {
    
    if ((this.bus.Seat38 == (null)) || (this.bus.Seat38 == ("string")) || (this.bus.Seat38 == ("")))
    {
    this.bus.Seat38 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S38";
    }
    else {
      this.bus.Seat38 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
    this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat39() {
    
    if ((this.bus.Seat39 == (null)) || (this.bus.Seat39 == ("string")) || (this.bus.Seat39 == ("")))
    {
    this.bus.Seat39 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S39";
    }
    else {
      this.bus.Seat39 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
      this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }
CheckSeat40() {
    
    if ((this.bus.Seat40 == (null)) || (this.bus.Seat40 == ("string")) || (this.bus.Seat40 == ("")))
    {
    this.bus.Seat40 = (localStorage.getItem('CustomerId') || '');
    this.bus.FilledSeats = this.bus.FilledSeats + 1;
    this.BookedSeatIds = this.BookedSeatIds + ",S40";
    }
    else {
      this.bus.Seat40 = "string";
      this.bus.FilledSeats = this.bus.FilledSeats - 1;
     this.BookedSeatIds = this.BookedSeatIds.slice(0,-4);
    }
    console.log(this.bus);
  }

  BookSeats() {
    console.log(this.bus);
    localStorage.setItem('Bus',JSON.stringify(this.bus));
    this.seatsbooked = this.bus.FilledSeats -this.seatsbooked;
    console.log(this.BookedSeatIds);
    console.log(this.seatsbooked);
    this.BookedSeatIds = this.BookedSeatIds.slice(6,);
    localStorage.setItem('TotalBookedSeats',JSON.stringify(this.seatsbooked));
    localStorage.setItem('SeatIds',JSON.stringify(this.BookedSeatIds));
    if (this.seatsbooked!=0)
    {
      this.router.navigate(['/payment']);
    }
  }

}
