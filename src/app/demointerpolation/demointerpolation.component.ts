import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demointerpolation',
  templateUrl: './demointerpolation.component.html',
  styleUrls: ['./demointerpolation.component.css']
})
export class DemointerpolationComponent implements OnInit {

  public firstName = 'Aaquib';
  public lastName = 'Nawaz';

  constructor() { }

  ngOnInit(): void {
  }

  printUserInfo(): string{
    return this.firstName + ' ' + this.lastName + 'With Perks = $ 1000';
  }

}
