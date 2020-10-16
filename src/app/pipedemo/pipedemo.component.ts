import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  // First Demo show lowercase, uppercase, titlecase
  // Second Demo show slice example
  constructor() { }
  textToFormat: string;
  /* third demo after slice  for JSON pipe*/
  walletKind = {
    name: 'Gpay',
    description: 'Google Pay Wallet'
  };
  // Fourth Demo of Number Fields
  numberToFormat: number;
  //Fifth Demo
  dateToFormat: Date;
  ngOnInit(): void {
  }
}
