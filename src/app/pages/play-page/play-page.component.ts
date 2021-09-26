import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'ms-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent {

  constructor(private gameService: GameService) { }

  public get game() {
    return this.gameService.getGame();
  }
}
