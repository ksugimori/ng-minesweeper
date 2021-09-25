import { Component } from '@angular/core';
import { Cell } from 'src/app/models/Cell';

@Component({
  selector: 'ms-field',
  templateUrl: './ms-field.component.html',
  styleUrls: ['./ms-field.component.scss']
})
export class MsFieldComponent {

  public rows: Cell[][] = [];

  constructor() {
    this.rows.push([
      new Cell({ count: 1 }),
      new Cell({ count: 2 }),
      new Cell({ count: 3 }),
    ]);
    this.rows.push([
      new Cell({ count: 9 }),
      new Cell({ count: 8 }),
      new Cell({ count: 7 }),
    ]);
  }

}
