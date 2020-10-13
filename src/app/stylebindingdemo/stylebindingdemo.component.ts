import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-stylebindingdemo',
  templateUrl: './stylebindingdemo.component.html',
  styleUrls: ['./stylebindingdemo.component.css']
})
export class StylebindingdemoComponent implements OnInit {

  pcolor = 'red';

  pstyle = {
    color: 'black',
    fontSize: '1em',
    border: '1px solid blue',
    background: 'yellow'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
