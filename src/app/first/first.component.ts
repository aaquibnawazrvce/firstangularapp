import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: '<p> Hi How are You </p>',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
