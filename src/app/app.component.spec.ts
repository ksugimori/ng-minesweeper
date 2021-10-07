import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MsFieldComponent } from './containers/ms-field/ms-field.component';
import { MsStatusBarComponent } from './containers/ms-status-bar/ms-status-bar.component';
import { MsLongTapDirective } from './directives/ms-long-tap/ms-long-tap.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { MsButtonComponent } from './presentations/ms-button/ms-button.component';
import { MsCellComponent } from './presentations/ms-cell/ms-cell.component';
import { MsCounterComponent } from './presentations/ms-counter/ms-counter.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MainPageComponent,
        PlayPageComponent,
        SettingPageComponent,
        MsStatusBarComponent,
        MsFieldComponent,
        MsCellComponent,
        MsButtonComponent,
        MsCounterComponent,
        MsLongTapDirective
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain('ng-minesweeper');
  });
});
