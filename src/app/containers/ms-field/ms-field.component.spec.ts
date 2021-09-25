import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsFieldComponent } from './ms-field.component';

describe('MsFieldComponent', () => {
  let component: MsFieldComponent;
  let fixture: ComponentFixture<MsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
