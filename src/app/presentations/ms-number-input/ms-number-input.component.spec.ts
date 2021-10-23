import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MsButtonComponent } from '../ms-button/ms-button.component';

import { MsNumberInputComponent } from './ms-number-input.component';

describe('MsNumberInputComponent', () => {
  let component: MsNumberInputComponent;
  let fixture: ComponentFixture<MsNumberInputComponent>;

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
    fixture.detectChanges();
  });

  describe('#increment', () => {
    it('プラスボタン押下で value が 1 増えること', () => {
      let newValue: number | undefined; // 変更イベントが発火されたらその値をセットする
      component.valueChange.subscribe(v => newValue = v);

      component.min = 0;
      component.max = 100;
      component.value = 5;

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.plus')).triggerEventHandler('clickButton', null);

      expect(newValue).toBe(6);
    });

    it('現在の値が最大値と等しい場合は変更されないこと', () => {
      let newValue: number | undefined; // 変更イベントが発火されたらその値をセットする
      component.valueChange.subscribe(v => newValue = v);

      component.min = 0;
      component.max = 100;
      component.value = 100;

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.plus')).triggerEventHandler('clickButton', null);

      expect(newValue).toBe(100); // 101 になってないこと
    });
  });

  describe('#decrement', () => {
    it('マイナスボタン押下で value が 1 減ること', () => {
      let newValue: number | undefined; // 変更イベントが発火されたらその値をセットする
      component.valueChange.subscribe(v => newValue = v);

      component.min = 0;
      component.max = 100;
      component.value = 5;

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.minus')).triggerEventHandler('clickButton', null);

      expect(newValue).toBe(4);
    });

    it('現在の値が最小値と等しい場合は変更されないこと', () => {
      let newValue: number | undefined; // 変更イベントが発火されたらその値をセットする
      component.valueChange.subscribe(v => newValue = v);

      component.min = 5;
      component.max = 10;
      component.value = 5;

      // + ボタンをクリック
      fixture.debugElement.query(By.css('.minus')).triggerEventHandler('clickButton', null);

      expect(newValue).toBe(5); // 4 になってないこと
    });
  });

  // TODO: update のケース
});
