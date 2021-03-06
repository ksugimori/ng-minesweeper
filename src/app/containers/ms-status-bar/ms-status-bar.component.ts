import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'ms-status-bar',
  templateUrl: './ms-status-bar.component.html',
  styleUrls: ['./ms-status-bar.component.scss']
})
export class MsStatusBarComponent {

  @Input() game?: Game;

  constructor(private gameService: GameService) { }

  public get mineCount(): number {
    if (!this.game) {
      return 0;
    }

    if (this.game.status.isEnd) {
      return 0;
    } else {
      return this.game.setting.numMines - this.game.flagCount;
    }
  }

  public get time(): number {
    if (!this.game) {
      return 0;
    }
    return this.game.playTime;
  }

  reset(): void {
    this.gameService.reset();
  }
}
