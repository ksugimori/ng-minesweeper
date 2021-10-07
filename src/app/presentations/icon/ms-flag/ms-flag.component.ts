import { Component } from '@angular/core';

@Component({
  selector: 'ms-flag',
  template: `
  <div class="flag">
    <div class="pole"></div>
    <div class="field"></div>
  </div>`,
  styles: [
    `:host {
      display: block;
      border: 0.15rem;
      width: 100%; 
      height: 100%; 
    }`,
    '.flag { position: relative; }',
    `.pole {
      position: absolute;
      background-color: #fff;
      width: 0.2rem;
      height: 1.2rem;
      top: 0.4rem;
      left: 0.6rem;
    }`,
    `.field {
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0.45rem 0 0.45rem 0.9rem;
      border-color: transparent transparent transparent #fff;
      top: 0.4rem;
      left: 0.8rem;
    }`
  ]
})
export class MsFlagComponent {

  constructor() { }

}
