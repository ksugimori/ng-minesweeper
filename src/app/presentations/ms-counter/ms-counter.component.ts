import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-counter',
  templateUrl: './ms-counter.component.html',
  styleUrls: ['./ms-counter.component.scss']
})
export class MsCounterComponent {

  @Input() value = 0;

  constructor() { }

}
