import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'ms-status-bar',
  templateUrl: './ms-status-bar.component.html',
  styleUrls: ['./ms-status-bar.component.scss']
})
export class MsStatusBarComponent implements OnInit {

  // TODO: これは @Input に
  private game!: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.getGame();
  }

  public get mineCount(): number {
    return this.gameService.getGame().closedCount;
  }

  public get time(): number {
    return this.gameService.getGame().playTime;
  }

  onClickButton(): void {
    alert('clicked!!!!');
  }
}
