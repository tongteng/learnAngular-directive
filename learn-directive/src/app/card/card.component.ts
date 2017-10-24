import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      padding: 2rem;
      font-size: 2rem;
      font-family: 'Helvetica', sans-serif;
      font-weight: bolder;
      background: #f40;
      color: #fff;
      margin: 1rem;
      display: inline-block;
    }
  `]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
