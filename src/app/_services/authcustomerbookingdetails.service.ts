import { Injectable } from '@angular/core';

//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthcustomerbookingdetailsService {
  readonly baseUrl:string="http://localhost:10536/api/AuthorisedCustomerBookingDetails";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetAllBookings():Observable<any[]>{
    return this.httpclient.get<any>(this.baseUrl);
  }
  deleteBooking(BookingId:number){
    return this.httpclient.delete<any>(this.baseUrl+"/"+BookingId);
  }
  addNewBooking(Booking:any): Observable<any>{
    return this.httpclient.post<any>(this.baseUrl, Booking);
  }
  
  searchBookingById(BookingId:number): Observable<any>{
    return this.httpclient.get(this.baseUrl+"/"+BookingId);
  }

}
