import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, timer, interval } from 'rxjs';
import { takeUntil, delay } from 'rxjs/operators';

@Directive({
  selector: '[msLongTap]'
})
export class MsLongTapDirective implements OnInit, OnDestroy {

  /** 長押し判定時間（ミリ秒） */
  @Input('msLongTap') threshold!: number;

  /** 長押しイベント */
  @Output() longTap = new EventEmitter();

  /** hold イベントを発火する間隔（ミリ秒） */
  private readonly holdInterval = 40;

  /** 長押し中に繰り返し発火されるイベント */
  @Output() hold = new EventEmitter();

  private mouseDown$ = new Subject();
  private mouseUp$ = new Subject();
  private touchStart$ = new Subject();
  private touchEnd$ = new Subject();

  /** Subscription をまとめる Subscription */
  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    const mouse = this.mouseDown$.subscribe(() => {
      this.emitLongTapIfNot(this.mouseUp$);
      this.repeatHoldUntil(this.mouseUp$);
    });
    this.subscriptions.add(mouse);

    const touch = this.touchStart$.subscribe(() => {
      this.emitLongTapIfNot(this.touchEnd$);
      this.repeatHoldUntil(this.touchEnd$);
    });
    this.subscriptions.add(touch);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  /**
   * threshold 経過後に longTap イベントを発火する。
   * 
   * ただし、発火前に stopper に値が流された場合は処理を中断します。
   * @param stopper イベント発火を中止するサブジェクト
   */
  private emitLongTapIfNot(stopper: Subject<any>) {
    timer(this.threshold)
      .pipe(takeUntil(stopper))
      .subscribe(() => this.longTap.emit());
  }

  /**
   * threshold 経過後に hold イベントを発火する。
   * 
   * stopper に値が流されるまで繰り返しイベント発火を繰り返します。
   * @param stopper イベント発火を中止するサブジェクト
   */
  private repeatHoldUntil(stopper: Subject<any>) {
    interval(40)
      .pipe(delay(this.threshold), takeUntil(stopper))
      .subscribe(() => this.hold.emit());
  }

  @HostListener('mousedown') onMouseDown() {
    this.mouseDown$.next();
  }

  @HostListener('mouseup') onMouseUp() {
    this.mouseUp$.next();
  }

  @HostListener('touchstart') onTouchStart() {
    this.touchStart$.next();
  }

  @HostListener('touchend') onTouchEnd() {
    this.touchEnd$.next();
  }

}
