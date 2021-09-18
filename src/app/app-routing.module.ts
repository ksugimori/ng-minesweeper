import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PlayPageComponent } from './play-page/play-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'play', component: PlayPageComponent },
  { path: 'settings', component: SettingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
