import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MsButtonComponent } from 'src/app/presentations/ms-button/ms-button.component';

import { SettingPageComponent } from './setting-page.component';

describe('SettingPageComponent', () => {
  let component: SettingPageComponent;
  let fixture: ComponentFixture<SettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SettingPageComponent,
        MsButtonComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
