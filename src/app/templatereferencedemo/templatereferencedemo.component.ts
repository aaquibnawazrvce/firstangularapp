import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencedemo',
  templateUrl: './templatereferencedemo.component.html',
  styleUrls: ['./templatereferencedemo.component.css']
})
export class TemplatereferencedemoComponent implements OnInit {

  firstNameProvided = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendData(inputText): void{
    this.firstNameProvided = inputText.value;
    console.log('The entire reference for the template element is');
    console.log(inputText);
  }

}
