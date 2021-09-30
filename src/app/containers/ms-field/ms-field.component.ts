import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'ms-field',
  templateUrl: './ms-field.component.html',
  styleUrls: ['./ms-field.component.scss']
})
export class MsFieldComponent {

  /** ゲーム */
  @Input() game?: Game;

  /** セル行の配列 */
  public get rows() {
    return this.game?.field?.rows;
  }

  /** ゲームが終了しているか？ */
  public get isGameEnd() {
    return !!this.game?.status?.isEnd;
  }

  /**
   * コンストラクタ
   * @param gameService ゲームサービス
   */
  constructor(private gameService: GameService) { }

  /**
   * セルを左クリックしたときの操作
   * @param x x座標
   * @param y y座標
   */
  onLeftClickCell(x: number, y: number) {
    this.gameService.open(x, y);
  }

  /**
   * セルを右クリックしたときの操作
   * @param x x座標
   * @param y y座標
   */
  onRightClickCell(x: number, y: number) {
    this.gameService.flag(x, y);
  }
}
