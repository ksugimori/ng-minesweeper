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
    this.subscriptions.add(this.mouseDown$.subscribe(() => {
      timer(this.threshold)
        .pipe(takeUntil(this.mouseUp$))
        .subscribe(() => this.longTap.emit());
    }));

    this.subscriptions.add(this.touchStart$.subscribe(() => {
      timer(this.threshold)
        .pipe(takeUntil(this.touchEnd$))
        .subscribe(() => this.longTap.emit());
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
