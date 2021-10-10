import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Setting } from 'src/app/models/Setting';

@Component({
  selector: 'ms-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent {

  /**
   * 画面表示、編集する設定情報
   */
  public get setting() {
    return this.gameService.getGame().setting;
  }


  /**
   * プリセットの設定値
   */
  readonly presetList = [Setting.EASY, Setting.NORMAL, Setting.HARD];

  constructor(private gameService: GameService) { }

  /**
   * Setting を更新する。
   * @param setting Setting
   */
  update(setting: Setting) {
    this.gameService.updateSetting(setting);
  }
}
