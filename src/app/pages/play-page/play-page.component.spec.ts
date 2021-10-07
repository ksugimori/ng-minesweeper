import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MsFieldComponent } from 'src/app/containers/ms-field/ms-field.component';
import { MsStatusBarComponent } from 'src/app/containers/ms-status-bar/ms-status-bar.component';
import { MsLongTapDirective } from 'src/app/directives/ms-long-tap/ms-long-tap.directive';
import { MsButtonComponent } from 'src/app/presentations/ms-button/ms-button.component';
import { MsCellComponent } from 'src/app/presentations/ms-cell/ms-cell.component';
import { MsCounterComponent } from 'src/app/presentations/ms-counter/ms-counter.component';

import { PlayPageComponent } from './play-page.component';

describe('PlayPageComponent', () => {
  let component: PlayPageComponent;
  let fixture: ComponentFixture<PlayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PlayPageComponent,
        MsStatusBarComponent,
        MsCounterComponent,
        MsButtonComponent,
        MsFieldComponent,
        MsCellComponent,
        MsLongTapDirective
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
