import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-counter',
  templateUrl: './ms-counter.component.html',
  styleUrls: ['./ms-counter.component.scss']
})
export class MsCounterComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
