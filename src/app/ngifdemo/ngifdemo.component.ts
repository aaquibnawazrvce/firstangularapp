import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
  templateUrl: './ngifdemo.component.html',
  styleUrls: ['./ngifdemo.component.css']
})
export class NgifdemoComponent implements OnInit {

  payWalletText = '';
  status = false;
  constructor() { }
  ngOnInit(): void {
  }

  afterEnteringPayWallet(): void{
    this.status = (this.payWalletText === 'Google');
  }


}
