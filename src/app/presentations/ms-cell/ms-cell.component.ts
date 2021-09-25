import { Component, Input } from '@angular/core';
import { Cell } from 'src/app/models/Cell';

@Component({
  selector: 'ms-cell',
  templateUrl: './ms-cell.component.html',
  styleUrls: ['./ms-cell.component.scss']
})
export class MsCellComponent {

  @Input() cell: Cell

  constructor() { 
    this.cell = new Cell();
  }

}
