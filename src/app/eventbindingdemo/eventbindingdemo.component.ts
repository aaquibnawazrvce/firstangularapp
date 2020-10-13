import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindingdemo',
  templateUrl: './eventbindingdemo.component.html',
  styleUrls: ['./eventbindingdemo.component.css']
})
export class EventbindingdemoComponent implements OnInit {

  styleObj = {
    background: 'pink',
    color: 'black',
    fontSize: '2em'
  };
  constructor() { }
  ngOnInit(): void {
  }
  changeStyle(eventparam): void {
    this.styleObj = {
      background: 'yellow',
      color: 'black',
      fontSize: '2em'
    };
    console.log(eventparam);
    console.log(eventparam.type);
  }
}
