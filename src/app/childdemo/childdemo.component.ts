import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  templateUrl: './childdemo.component.html',
  styleUrls: ['./childdemo.component.css']
})
export class ChilddemoComponent implements OnInit {

  constructor() { }

  @Output() eventToSendMessage = new EventEmitter();
  message: string;
  sendData(): void{
    this.eventToSendMessage.emit(this.message);
  }

  ngOnInit(): void {
  }

}
