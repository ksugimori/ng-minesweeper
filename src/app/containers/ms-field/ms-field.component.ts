import { Component } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'ms-field',
  templateUrl: './ms-field.component.html',
  styleUrls: ['./ms-field.component.scss']
})
export class MsFieldComponent {

  private game: Game;

  public get rows() {
    return this.game.field.rows;
  }

  /**
   * コンストラクタ
   */
  constructor() {
    this.game = new Game();
    this.game.initialize();
  }

  /**
   * セルを左クリックしたときの操作
   * @param p 座標
   */
  onLeftClickCell(p: { x: number, y: number }) {
    this.game.open(p.x, p.y);
  }

  /**
   * セルを右クリックしたときの操作
   * @param p 座標
   */
  onRightClickCell(p: { x: number, y: number }) {
    this.game.flag(p.x, p.y);
  }
}
