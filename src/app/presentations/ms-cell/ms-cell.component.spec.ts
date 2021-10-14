import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { MsLongTapDirective } from 'src/app/directives/ms-long-tap/ms-long-tap.directive';

import { MsCellComponent } from './ms-cell.component';

describe('MsCellComponent', () => {
  let component: MsCellComponent;
  let fixture: ComponentFixture<MsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MsCellComponent,
        MsLongTapDirective
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCellComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#cssClassArray', () => {
    it('デフォルトで cell クラスのみセットされていること', () => {
      expect(component.cssClassArray.length).toBe(1);
      expect(component.cssClassArray).toContain('cell');
    });

    it('開いたセルには open クラスが追加されること', () => {
      component.isOpen = true;

      expect(component.cssClassArray.length).toBe(2);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
    });

    it('count = 1 のとき、 cell-1 クラスが追加されること', () => {
      component.isOpen = true;
      component.count = 1;

      expect(component.cssClassArray.length).toBe(3);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
      expect(component.cssClassArray).toContain('cell-1');
    });

    it('isMine = true のとき、 cell-mine クラスが追加されること', () => {
      component.isOpen = true;
      component.count = 1;
      component.isMine = true;

      expect(component.cssClassArray.length).toBe(3);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
      expect(component.cssClassArray).toContain('cell-mine');
    });
  });

  describe('#onLeftClick', () => {
    it('左クリックすると leftClick イベントが発火されること', () => {
      let isLeftClickFired = false;
      let isRightClickFired = false;

      // leftClick, rightClick が発火されたらフラグを立てる
      component.leftClick.pipe(first()).subscribe(() => isLeftClickFired = true);
      component.rightClick.pipe(first()).subscribe(() => isRightClickFired = true);

      // クリック
      let div = fixture.debugElement.query(By.css('.cell')).nativeElement;
      div.click();

      // 検証
      expect(isLeftClickFired).toBeTrue();
      expect(isRightClickFired).toBeFalse();
    });
  });

  describe('#onRightClick', () => {
    it('右クリックすると rightClick イベントが発火されること', () => {
      let isLeftClickFired = false;
      let isRightClickFired = false;

      // leftClick, rightClick が発火されたらフラグを立てる
      component.leftClick.pipe(first()).subscribe(() => isLeftClickFired = true);
      component.rightClick.pipe(first()).subscribe(() => isRightClickFired = true);

      // クリック
      let div = fixture.debugElement.query(By.css('.cell'));
      div.triggerEventHandler('contextmenu', null);

      // 検証
      expect(isLeftClickFired).toBeFalse();
      expect(isRightClickFired).toBeTrue();
    });
  });

  it('500 ミリ秒以上の長押しで rightClick イベントが発火されること', fakeAsync(() => {
    let isRightClickFired = false;

    // rightClick が発火されたらフラグを立てる
    component.rightClick.pipe(first()).subscribe(() => isRightClickFired = true);

    let div = fixture.debugElement.query(By.css('.cell'));

    //
    // 499 ミリ秒では発火されないこと
    //
    div.triggerEventHandler('touchstart', null);
    tick(499);
    div.triggerEventHandler('touchend', null);

    expect(isRightClickFired).toBeFalse();

    //
    // 500 ミリ秒では発火されること
    //
    div.triggerEventHandler('touchstart', null);
    tick(500);
    div.triggerEventHandler('touchend', null);

    expect(isRightClickFired).toBeTrue();
  }));
});
