import { Component } from '@angular/core';
import { Cell } from 'src/app/models/Cell';
import { Point } from 'src/app/models/util/Point';

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

  onLeftClickCell(p: { x: number, y: number }) {
    console.log("left clicked " + JSON.stringify(p));
  }

  onRightClickCell(p: { x: number, y: number }) {
    console.log("right clicked " + JSON.stringify(p));
  }
}
