import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MsButtonComponent } from 'src/app/presentations/ms-button/ms-button.component';
import { MsCounterComponent } from 'src/app/presentations/ms-counter/ms-counter.component';

import { MsStatusBarComponent } from './ms-status-bar.component';

describe('MsStatusBarComponent', () => {
  let component: MsStatusBarComponent;
  let fixture: ComponentFixture<MsStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MsStatusBarComponent,
        MsButtonComponent,
        MsCounterComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
