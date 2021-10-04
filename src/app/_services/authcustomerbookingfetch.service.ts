import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { AuthCustomerbookingdetails } from '../_classes/auth-customerbookingdetails';

@Injectable({
  providedIn: 'root'
})
export class AuthcustomerbookingfetchService {

  readonly baseUrl:string="http://localhost:10536/api/AuthCustomerBookingsFetch";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetBookingDetails(Booking:AuthCustomerbookingdetails):Observable<AuthCustomerbookingdetails>{
    return this.httpclient.post<AuthCustomerbookingdetails>(this.baseUrl,Booking);
  }
}
