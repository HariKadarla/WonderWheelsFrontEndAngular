import { Injectable } from '@angular/core';
//Added.....
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Buses } from '../_classes/buses';


@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {
  readonly baseUrl: string = "http://localhost:10536/api/BusDetails";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetAllBuses(): Observable<any[]> {
    return this.httpclient.get<any>(this.baseUrl);
  }
  deletebus(busId: number) {
    return this.httpclient.delete<any>(this.baseUrl + "/" + String(busId)); 
  }
  addNewbus(bus: any): Observable<any> {
    console.log(bus);
    return this.httpclient.post<any>(this.baseUrl, bus);
  }
  updatebus(busId: number, bus: any): Observable<any> {
    console.log(bus);
    localStorage.setItem('UpdatedBus',JSON.stringify(bus))
    return this.httpclient.put<any>(this.baseUrl + "/" + String(busId), bus);
  }
  searchbusById(busId: number): Observable<Buses> {
    return this.httpclient.get<Buses>(this.baseUrl + "/" + String(busId));
  }

}
