import { Injectable } from '@angular/core';

//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthCustomerDetailsService {

  readonly baseUrl:string="http://localhost:10536/api/AuthorisedCustomerDetails";

  constructor(private httpclient:HttpClient) { }

  
  addNewUser(SignupUserObject:any): Observable<any>{
    return this.httpclient.post<any>(this.baseUrl, SignupUserObject);
  }
  
  searchUserById(CustomerId:number): Observable<any>{
    return this.httpclient.get(this.baseUrl+"/"+CustomerId);
  }

}
