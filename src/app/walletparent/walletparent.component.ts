import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walletparent',
  templateUrl: './walletparent.component.html',
  styleUrls: ['./walletparent.component.css']
})
export class WalletparentComponent implements OnInit {



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

  // Note this is for second time example for passing data from parent to child
  // using alias
  headingParent = 'Wallet Complete Info';
  //Add to second example



  constructor() { }

  ngOnInit(): void {
  }

}
