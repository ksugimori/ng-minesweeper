import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { MsStatusBarComponent } from './containers/ms-status-bar/ms-status-bar.component';
import { MsCounterComponent } from './presentations/ms-counter/ms-counter.component';
import { MsButtonComponent } from './presentations/ms-button/ms-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SettingPageComponent,
    PlayPageComponent,
    MsStatusBarComponent,
    MsCounterComponent,
    MsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
