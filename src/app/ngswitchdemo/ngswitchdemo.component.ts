import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  templateUrl: './ngswitchdemo.component.html',
  styleUrls: ['./ngswitchdemo.component.css']
})
export class NgswitchdemoComponent implements OnInit {

  payWalletText = '';
  walletType = '';
  constructor() { }

  ngOnInit(): void {
  }

  afterEnteringPayWallet(): void{
    this.walletType = this.payWalletText;
  }

}
