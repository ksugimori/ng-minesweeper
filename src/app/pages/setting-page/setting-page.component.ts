import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Setting } from 'src/app/models/Setting';

@Component({
  selector: 'ms-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  /**
   * 画面表示、編集する設定情報
   */
  setting: Setting = Setting.EASY;

  /**
   * プリセットの設定値
   */
  readonly presetList = [Setting.EASY, Setting.NORMAL, Setting.HARD];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.setting = this.gameService.getGame().setting.clone();
  }

  update(level: Setting) {
    this.setting.merge(level);
  }
}
