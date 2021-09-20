import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsButtonComponent } from './ms-button.component';

describe('MsButtonComponent', () => {
  let component: MsButtonComponent;
  let fixture: ComponentFixture<MsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsButtonComponent ]
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
});
