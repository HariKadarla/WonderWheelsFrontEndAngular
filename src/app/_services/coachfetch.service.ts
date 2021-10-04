import { Injectable } from '@angular/core';
//Added.....
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Coach } from '../_classes/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachfetchService {

  readonly baseUrl: string = "http://localhost:10536/api/FetchCoach";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetCoachBusesDetails(coachbus: any): Observable<Coach[]> {
    return this.httpclient.post<Coach[]>(this.baseUrl, coachbus);
  }
}