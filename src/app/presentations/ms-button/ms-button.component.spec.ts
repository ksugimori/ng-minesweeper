import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsButtonComponent } from './ms-button.component';
import { first } from 'rxjs/operators';
import { By } from '@angular/platform-browser';

describe('MsButtonComponent', () => {
  let component: MsButtonComponent;
  let fixture: ComponentFixture<MsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('クリックすると clickButton イベントが発火されること', () => {
    // イベントが発火したらフラグを true に変更するように設定しておく
    let flag = false;
    component.clickButton.pipe(first()).subscribe(() => flag = true);

    // クリックイベント発生
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', new Event('hoge'));

    // 検証
    expect(flag).toBeTruthy()
  })
});
