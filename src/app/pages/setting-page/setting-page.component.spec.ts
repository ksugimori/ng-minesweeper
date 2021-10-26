import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MsLongTapDirective } from 'src/app/directives/ms-long-tap/ms-long-tap.directive';
import { MsButtonComponent } from 'src/app/presentations/ms-button/ms-button.component';
import { MsNumberInputComponent } from 'src/app/presentations/ms-number-input/ms-number-input.component';

import { SettingPageComponent } from './setting-page.component';

describe('SettingPageComponent', () => {
  let component: SettingPageComponent;
  let fixture: ComponentFixture<SettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SettingPageComponent,
        MsButtonComponent,
        MsNumberInputComponent,
        MsLongTapDirective
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
