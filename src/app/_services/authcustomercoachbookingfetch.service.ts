import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { Coachreservationdetails } from '../_classes/coachreservationdetails';

@Injectable({
  providedIn: 'root'
})
export class AuthcustomercoachbookingfetchService {

  readonly baseUrl:string="http://localhost:10536/api/AuthCustomerCoachBookingFetch";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetBookingDetails(Booking:Coachreservationdetails):Observable<Coachreservationdetails>{
    return this.httpclient.post<Coachreservationdetails>(this.baseUrl,Booking);
  }
}