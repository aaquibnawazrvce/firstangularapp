import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybindingdemo',
  templateUrl: './propertybindingdemo.component.html',
  styleUrls: ['./propertybindingdemo.component.css']
})
export class PropertybindingdemoComponent implements OnInit {

  firstNameField = 'firstNameV';

  lastNameField = 'lastName';

  status = false;

  constructor() { }

  ngOnInit(): void {
  }

}
