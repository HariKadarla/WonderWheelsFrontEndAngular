import { Component, OnInit } from '@angular/core';

import { RecordsProfitsService } from '../_services/recordsprofits.service';

@Component({
  selector: 'app-recordsandprofits',
  templateUrl: './recordsandprofits.component.html',
  styleUrls: ['./recordsandprofits.component.css']
})
export class RecordsandprofitsComponent implements OnInit {


  constructor(private service: RecordsProfitsService) { }

  RecordsProfitsList: any = [];

  GetRecordsProfits() {

    this.service.ServiceMethodGetAllRecordsProfits().subscribe(data => { this.RecordsProfitsList = data; });

  }

  ngOnInit(): void {
    this.GetRecordsProfits();
  }

}