import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { PlayPageComponent } from './play-page/play-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SettingPageComponent,
    PlayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
