import { Injectable } from '@angular/core';
//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class RoutesService {

  readonly baseUrl:string="http://localhost:10536/api/Routes";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetAllRoutes():Observable<any[]>{
    return this.httpclient.get<any>(this.baseUrl);
  }
  deleteRoute(RouteId:number){
    return this.httpclient.delete<any>(this.baseUrl+"/"+RouteId);
  }
  addNewRoute(route:any): Observable<any>{
    return this.httpclient.post<any>(this.baseUrl, route);
  }
  updateRoute(RouteId:number, route:any): Observable<any>{
    console.log(route);
    return this.httpclient.put<any>(this.baseUrl+"/"+RouteId, route);
  }
  searchRouteById(Routeid:number): Observable<any>{
    return this.httpclient.get(this.baseUrl+"/"+Routeid);
  }



}
