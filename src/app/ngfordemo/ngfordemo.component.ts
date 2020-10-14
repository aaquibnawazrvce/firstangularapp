import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent implements OnInit {

  paymentWalletInfoList = [{
    walletName : 'GOOGLE',
    isDefault: false,
    maxAmount: 50000
    }, {
    walletName: 'AMAZON',
    isDefault: false,
    maxAmount: 25000
    }, {
    walletName : 'PHONEPE',
    isDefault: true,
    maxAmount: 55000
    }, {
    walletName : 'PAYTM',
    isDefault: false,
    maxAmount: 5000
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
