import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor() { }
  Wallet : number = 0;

  ngOnInit(): void {
    this.Wallet = JSON.parse(localStorage.getItem('AuthCustomer') || '').Wallet;
  }

}
