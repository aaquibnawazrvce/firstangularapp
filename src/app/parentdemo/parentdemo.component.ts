import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentdemo',
  templateUrl: './parentdemo.component.html',
  styleUrls: ['./parentdemo.component.css']
})
export class ParentdemoComponent implements OnInit {

  parentmessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
