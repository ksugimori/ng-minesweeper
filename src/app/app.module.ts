import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { MsStatusBarComponent } from './containers/ms-status-bar/ms-status-bar.component';
import { MsFieldComponent } from './containers/ms-field/ms-field.component';
import { MsCounterComponent } from './presentations/ms-counter/ms-counter.component';
import { MsButtonComponent } from './presentations/ms-button/ms-button.component';
import { MsCellComponent } from './presentations/ms-cell/ms-cell.component';
import { MsFlagComponent } from './presentations/icon/ms-flag/ms-flag.component';
import { MsMineComponent } from './presentations/icon/ms-mine/ms-mine.component';
import { MsNumberInputComponent } from './presentations/ms-number-input/ms-number-input.component';
import { MsLongTapDirective } from './directives/ms-long-tap/ms-long-tap.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SettingPageComponent,
    PlayPageComponent,
    MsStatusBarComponent,
    MsCounterComponent,
    MsButtonComponent,
    MsFieldComponent,
    MsCellComponent,
    MsFlagComponent,
    MsMineComponent,
    MsLongTapDirective,
    MsNumberInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
