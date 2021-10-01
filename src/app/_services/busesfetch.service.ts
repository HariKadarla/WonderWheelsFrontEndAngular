import { Injectable } from '@angular/core';
//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { Buses } from '../_classes/buses';

@Injectable({
  providedIn: 'root'
})
export class BusesfetchService {

  readonly baseUrl:string="http://localhost:10536/api/BusesFetch";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetBusesDetails(bus:any):Observable<Buses[]>{
    return this.httpclient.post<Buses[]>(this.baseUrl,bus);
  }
}
