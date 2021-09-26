import { Component } from '@angular/core';

@Component({
  selector: 'ms-mine',
  template: `
  <div class="mine">
    <div class="circle"></div>
    <div class="bar"></div>
    <div
      class="bar"
      style="transform: rotate(45deg)"
    ></div>
    <div
      class="bar"
      style="transform: rotate(90deg)"
    ></div>
    <div
      class="bar"
      style="transform: rotate(135deg)"
    ></div>
  </div>`,
  styles: [
    '.mine { position: relative; }',
    `.mine > .circle {
      background-color: #fff;
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: 0.5rem;
      left: 0.5rem;
      border-radius: 0.5rem;
    }`,
    `.mine > .bar {
      background-color: #fff;
      position: absolute;
      width: 1.3rem;
      height: 0.3rem;
      top: 0.85rem;
      left: 0.35rem;
      border-radius: 0.15rem;
    }`
  ]
})
export class MsMineComponent {

  constructor() { }

}
