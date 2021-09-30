import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthAdminDetails } from '../_classes/auth-admin-details';
@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  readonly baseUrl: string = "http://localhost:63671/api/AdminAuth";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetAdminDetails(admin: any): Observable<AuthAdminDetails> {
    return this.httpclient.post<AuthAdminDetails>(this.baseUrl, admin);
  }
}

