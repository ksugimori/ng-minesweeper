import { Injectable } from '@angular/core';
import { Game } from './models/Game';
import { Coordinate } from './models/util/Coordinate';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;

  constructor() {
    this.game = new Game();
    this.game.initialize();
  }

  public getGame(): Game {
    return this.game;
  }

  public reset(): Game {
    this.game.initialize();
    return this.game;
  }

  public open(at: Coordinate): void {
    this.game.open(at.x, at.y);
  }

  public flag(at: Coordinate): void {
    this.game.flag(at.x, at.y);
  }
}
