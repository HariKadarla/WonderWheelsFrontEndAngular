import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachreservationbusdetailsService {

  readonly baseUrl: string = "http://localhost:10536/api/CoachResevationBusDetails";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetAllCoachBuses(): Observable<any[]> {
    return this.httpclient.get<any>(this.baseUrl);
  }
  deletecoachbus(coachbusId: number) {
    return this.httpclient.delete<any>(this.baseUrl + "/" + coachbusId);
  }
  addNewcoachbus(coachbus: any): Observable<any> {
    console.log(coachbus);
    return this.httpclient.post<any>(this.baseUrl, coachbus);
  }
  updatecoachbus(coachbusId: number, coachbus: any): Observable<any> {
    console.log(coachbus);
    return this.httpclient.put<any>(this.baseUrl + "/" + coachbusId, coachbus);
  }
  searchcoachbusById(coachbusId: number): Observable<any> {
    return this.httpclient.get(this.baseUrl + "/" + coachbusId);
  }
}
