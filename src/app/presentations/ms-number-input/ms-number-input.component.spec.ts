import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
