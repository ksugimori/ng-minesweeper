import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCellComponent } from './ms-cell.component';

describe('MsCellComponent', () => {
  let component: MsCellComponent;
  let fixture: ComponentFixture<MsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
