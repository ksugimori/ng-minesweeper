import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCounterComponent } from './ms-counter.component';

describe('MsCounterComponent', () => {
  let component: MsCounterComponent;
  let fixture: ComponentFixture<MsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
