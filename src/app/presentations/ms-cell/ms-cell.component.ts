import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ms-cell',
  templateUrl: './ms-cell.component.html',
  styleUrls: ['./ms-cell.component.scss']
})
export class MsCellComponent {

  /** 周囲の地雷数 */
  @Input() count: number = 0;

  /** 開いたセルか？ */
  @Input() isOpen: boolean = false;

  /** フラグが立っているか？ */
  @Input() isFlag: boolean = false;

  /** 地雷があるか？ */
  @Input() isMine: boolean = false;

  /** 左クリック */
  @Output() leftClick = new EventEmitter();

  /** 右クリック */
  @Output() rightClick = new EventEmitter();

  /**
   * セルの状態に応じたクラスの配列
   */
  public get cssClassArray() {
    const result = ['cell'];

    if (this.isOpen) {
      result.push('open');
      if (this.isMine) {
        result.push('cell-mine');
      } else if (this.count > 0) {
        result.push(`cell-${this.count}`);
      }
    }

    return result;
  }

  /**
   * コンストラクタ
   */
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
