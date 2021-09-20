import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-ms-status-bar',
  templateUrl: './ms-status-bar.component.html',
  styleUrls: ['./ms-status-bar.component.scss']
})
export class MsStatusBarComponent  {

  public get mineCount(): number {
    return this.gameService.getGame().closedCount;
  }

  public get time(): number {
    return this.gameService.getGame().playTime;
  }

  constructor(private gameService: GameService) { }

  onClickButton(): void {
    alert('clicked!!!!');
  }
}
