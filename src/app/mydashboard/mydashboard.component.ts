import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {

  constructor() { }
  FirstName : string = '';
  CustomerId : number = 0;
  id: string = '';
  ngOnInit(): void {
    this.FirstName = (localStorage.getItem('FirstName') || '' ) ;
     
    this.id = (localStorage.getItem('CustomerId') || '');
        this.CustomerId = parseInt(this.id);
  }

  

}
