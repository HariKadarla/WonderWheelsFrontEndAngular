import { Injectable } from '@angular/core';

//Added.....
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { AuthUserDetails } from '../_classes/auth-user-details';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  readonly baseUrl:string="http://localhost:10536/api/UserAuth";

  constructor(private httpclient:HttpClient) { }

  ServiceMethodGetUserDetails(user:any):Observable<AuthUserDetails>{
    return this.httpclient.post<AuthUserDetails>(this.baseUrl,user);
  }
}
