import { Injectable } from '@angular/core';
import { Game } from './models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;

  constructor() {
    this.game = new Game();
  }

  public getGame(): Game {
    return this.game;
  }
}
