import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybindingdemo',
  templateUrl: './twowaybindingdemo.component.html',
  styleUrls: ['./twowaybindingdemo.component.css']
})
export class TwowaybindingdemoComponent implements OnInit {

  //firstName: string;

  firstName = 'Hello';
  constructor() { }

  ngOnInit(): void {
  }

}
