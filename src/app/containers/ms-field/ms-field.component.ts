import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';
import { Coordinate } from 'src/app/models/util/Coordinate';

@Component({
  selector: 'ms-field',
  templateUrl: './ms-field.component.html',
  styleUrls: ['./ms-field.component.scss']
})
export class MsFieldComponent implements OnInit {

  // TODO: これは @Input にする
  private game!: Game;

  public get rows() {
    return this.game.field.rows;
  }

  /**
   * コンストラクタ
   */
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.game = this.gameService.reset();
  }

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
