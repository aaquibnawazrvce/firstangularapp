import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-walletchilddetails',
  templateUrl: './walletchilddetails.component.html',
  styleUrls: ['./walletchilddetails.component.css']
})
export class WalletchilddetailsComponent implements OnInit {
  constructor() { }
  @Input() dataFromParent: any;
  // This is for second alias dont type during first demo
  @Input('headTextParent')  header: string;
    // end for second alias dont type during first demo
   ngOnInit(): void {
  }

}
