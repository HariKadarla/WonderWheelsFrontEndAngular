import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsProfitsService {

  readonly baseUrl: string = "http://localhost:10536/api/Records";

  constructor(private httpclient: HttpClient) { }

  ServiceMethodGetAllRecordsProfits(): Observable<any[]> {
    return this.httpclient.get<any>(this.baseUrl);
  }

}