import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from 'src/app/models/Cell';
import { Point } from 'src/app/models/util/Point';

@Component({
  selector: 'ms-cell',
  templateUrl: './ms-cell.component.html',
  styleUrls: ['./ms-cell.component.scss']
})
export class MsCellComponent {

  @Input() cell!: Cell;

  /** 左クリック */
  @Output() leftClick = new EventEmitter();

  /** 右クリック */
  @Output() rightClick = new EventEmitter();

  public get cssClassArray() {
    const result = ['cell'];

    if (this.cell.isOpen) {
      result.push('open');
      if (this.cell.isMine) {
        result.push('cell-mine');
      } else {
        result.push(`cell-${this.cell.count}`);
      }
    }

    return result;
  }

  constructor() { }

  /**
   * 左クリック
   * @param $event ネイティブイベント
   */
   onLeftClick($event: Event) {
    $event.stopPropagation();
    this.leftClick.emit();
  }

  /**
   * 右クリック
   * @param $event ネイティブイベント
   */
   onRightClick($event: Event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.rightClick.emit();
  }
}
