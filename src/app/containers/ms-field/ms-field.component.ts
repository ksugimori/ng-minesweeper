import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';
import { Coordinate } from 'src/app/models/util/Coordinate';

@Component({
  selector: 'ms-field',
  templateUrl: './ms-field.component.html',
  styleUrls: ['./ms-field.component.scss']
})
export class MsFieldComponent {

  @Input() game?: Game;

  public get rows() {
    return this.game?.field?.rows;
  }

  /**
   * コンストラクタ
   */
  constructor(private gameService: GameService) {}

  /**
   * セルを左クリックしたときの操作
   * @param at 座標
   */
  onLeftClickCell(at: Coordinate) {
    this.gameService.open(at);
  }

  /**
   * セルを右クリックしたときの操作
   * @param at 座標
   */
  onRightClickCell(at: Coordinate) {
    this.gameService.flag(at);
  }
}
