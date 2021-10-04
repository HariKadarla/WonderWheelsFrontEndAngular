import { Injectable } from '@angular/core';

//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UnauthcustomerdetailsService {

  readonly baseUrl:string="http://localhost:10536/api/UnauthorisedCustomerDetails";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetAllCustomerDetails():Observable<any[]>{
    return this.httpclient.get<any>(this.baseUrl);
  }
  deleteUnAuthCustomer(UnauthCustomerId:number){
    return this.httpclient.delete<any>(this.baseUrl+"/"+UnauthCustomerId);
  }
  addNewUnAuthCustomer(UnauthCustomer:any): Observable<any>{
    return this.httpclient.post<any>(this.baseUrl, UnauthCustomer);
  }
  
  searchUnAuthCustomerId(UnauthCustomerId:number): Observable<any>{
    return this.httpclient.get(this.baseUrl+"/"+UnauthCustomerId);
  }

  
}
