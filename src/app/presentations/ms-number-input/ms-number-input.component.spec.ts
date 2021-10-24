import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MsButtonComponent } from '../ms-button/ms-button.component';

import { MsNumberInputComponent } from './ms-number-input.component';

describe('MsNumberInputComponent', () => {
  let component: MsNumberInputComponent;
  let fixture: ComponentFixture<MsNumberInputComponent>;
  let inputTag: HTMLInputElement; // コンポーネント内の input タグ

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MsNumberInputComponent, MsButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsNumberInputComponent);
    component = fixture.componentInstance;
    inputTag = fixture.debugElement.query(By.css('input')).nativeElement;
    fixture.detectChanges();
  });

  describe('#increment', () => {
    it('プラスボタン押下で value が 1 増えること', fakeAsync(() => {
      component.min = 0;
      component.max = 100;
      component.value = 5;
      fixture.detectChanges();

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.plus')).triggerEventHandler('clickButton', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(6);
      expect(inputTag.value).toBe('6');
    }));

    it('現在の値が最大値と等しい場合は変更されないこと', fakeAsync(() => {
      component.min = 0;
      component.max = 100;
      component.value = 100;
      fixture.detectChanges();

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.plus')).triggerEventHandler('clickButton', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(100); // 101 になってないこと
      expect(inputTag.value).toBe('100');
    }));
  });

  describe('#decrement', () => {
    it('マイナスボタン押下で value が 1 減ること', fakeAsync(() => {
      component.min = 0;
      component.max = 100;
      component.value = 5;
      fixture.detectChanges();

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.minus')).triggerEventHandler('clickButton', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(4);
      expect(inputTag.value).toBe('4');
    }));

    it('現在の値が最小値と等しい場合は変更されないこと', fakeAsync(() => {
      component.min = 5;
      component.max = 10;
      component.value = 5;
      fixture.detectChanges();

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.minus')).triggerEventHandler('clickButton', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(5); // 4 になってないこと
      expect(inputTag.value).toBe('5');
    }));
  });

  describe('#update', () => {
    it('数字以外の文字は削除されて value が更新されること', fakeAsync(() => {
      component.max = 10000;
      component.value = 5;
      fixture.detectChanges();

      // input タグへの入力
      inputTag.value = '1a2X3';
      fixture.debugElement.query(By.css('input')).triggerEventHandler('change', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(123);
      expect(inputTag.value).toBe('123');
    }));

    it('数字が入っていない場合はデフォルト値として 9 が設定されること', fakeAsync(() => {
      component.max = 10000;
      fixture.detectChanges();

      // input タグへの入力
      inputTag.value = 'without-number';
      fixture.debugElement.query(By.css('input')).triggerEventHandler('change', null);
      fixture.detectChanges();
      tick();

      // 検証
      expect(component.value).toBe(9);
      expect(inputTag.value).toBe('9');
    }));
  });
});