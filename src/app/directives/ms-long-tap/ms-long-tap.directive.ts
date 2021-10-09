import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[msLongTap]'
})
export class MsLongTapDirective implements OnInit, OnDestroy {

  /** 長押し判定時間（ミリ秒） */
  @Input('msLongTap') threshold?: number;

  /** 長押しイベント */
  @Output() longTap = new EventEmitter();

  private mouseDown$ = new Subject();
  private mouseUp$ = new Subject();
  private touchStart$ = new Subject();
  private touchEnd$ = new Subject();

  /** Subscription をまとめる Subscription */
  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    const mouse = this.mouseDown$.subscribe(() => this.emitIfNot(this.mouseUp$));
    this.subscriptions.add(mouse);

    const touch = this.touchStart$.subscribe(() => this.emitIfNot(this.touchEnd$));
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
  private emitIfNot(stopper: Subject<any>) {
    timer(this.threshold)
      .pipe(takeUntil(stopper))
      .subscribe(() => this.longTap.emit());
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
