import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MsLongTapDirective } from './ms-long-tap.directive';

/**
 * 検証用のコンポーネント
 */
@Component({
  template: `
  <div
    [msLongTap]="100"
    (longTap)="onLongTap()"
    (hold)="onHold()"
  >Button</div>`
})
class TestComponent {
  longTapCount = 0;
  holdCount = 0;

  onLongTap() {
    this.longTapCount++;
  }

  onHold() {
    this.holdCount++;
  }
}

/**
 * テストケース
 */
describe('MsLongTapDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsLongTapDirective, TestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('100 ミリ秒以上の長押しで longTap イベントが発火されること', fakeAsync(() => {
    component.longTapCount = 0;
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('div'));

    // 99 ミリ秒では発火されないこと
    div.triggerEventHandler('mousedown', null);
    tick(99);
    div.triggerEventHandler('mouseup', null);

    expect(component.longTapCount).toBe(0);

    // 100 ミリ秒では発火されること
    div.triggerEventHandler('mousedown', null);
    tick(100);
    div.triggerEventHandler('mouseup', null);

    expect(component.longTapCount).toBe(1);
  }));

  it('100 ミリ秒以上の長押しで hold イベントが発火されること', fakeAsync(() => {
    component.holdCount = 0;
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('div'));

    // 100 ミリ秒後から 40 ミリ秒ごとに hold イベントが投げられるので、少なくとも10回呼ばれる
    div.triggerEventHandler('mousedown', null);
    tick(500);
    div.triggerEventHandler('mouseup', null);

    expect(component.holdCount).toBeGreaterThanOrEqual(10);
  }));
});
