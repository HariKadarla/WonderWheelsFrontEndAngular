import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachreservationdetailsService {

  readonly baseUrl: string = "http://localhost:10536/api/CoachReservationDetails";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetAllCoachBuses(): Observable<any[]> {
    return this.httpclient.get<any>(this.baseUrl);
  }
  deletebus(busId: number) {
    return this.httpclient.delete<any>(this.baseUrl + "/" + busId);
  }
  addNewreservation(bus: any): Observable<any> {
    console.log(bus);
    return this.httpclient.post<any>(this.baseUrl, bus);
  }
  updatebus(busId: number, bus: any): Observable<any> {
    console.log(bus);
    return this.httpclient.put<any>(this.baseUrl + "/" + busId, bus);
  }
  searchbusById(busId: number): Observable<any> {
    return this.httpclient.get(this.baseUrl + "/" + busId);
  }
}
