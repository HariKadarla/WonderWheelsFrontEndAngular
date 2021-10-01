import { Injectable } from '@angular/core';
//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { Routes } from '../_classes/routes';

@Injectable({
  providedIn: 'root'
})
export class RoutefetchService {

  readonly baseUrl:string="http://localhost:10536/api/RouteFetch";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetRouteDetails(route:any):Observable<Routes>{
    return this.httpclient.post<Routes>(this.baseUrl,route);
  }
}
