import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ms-cell',
  templateUrl: './ms-cell.component.html',
  styleUrls: ['./ms-cell.component.scss']
})
export class MsCellComponent implements OnInit {

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

  /** 長押し判定時間（ミリ秒） */
  private readonly LONG_TAP_MSEC = 500;

  private mouseDown$ = new Subject();
  private mouseUp$ = new Subject();
  private touchStart$ = new Subject();
  private touchEnd$ = new Subject();

  public ngOnInit(): void {
    this.mouseDown$.subscribe(() => {
      timer(this.LONG_TAP_MSEC)
        .pipe(takeUntil(this.mouseUp$))
        .subscribe(() => this.rightClick.emit());
    });

    this.touchStart$.subscribe(() => {
      timer(this.LONG_TAP_MSEC)
        .pipe(takeUntil(this.touchEnd$))
        .subscribe(() => this.rightClick.emit());
    });
  }

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

  onMouseDown() {
    this.mouseDown$.next();
  }

  onMouseUp() {
    this.mouseUp$.next();
  }

  onTouchStart() {
    this.touchStart$.next();
  }

  onTouchEnd() {
    this.touchEnd$.next();
  }
}
