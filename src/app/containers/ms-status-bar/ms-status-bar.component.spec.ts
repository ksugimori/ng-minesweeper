import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsStatusBarComponent } from './ms-status-bar.component';

describe('MsStatusBarComponent', () => {
  let component: MsStatusBarComponent;
  let fixture: ComponentFixture<MsStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsStatusBarComponent ]
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
