import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-ms-status-bar',
  templateUrl: './ms-status-bar.component.html',
  styleUrls: ['./ms-status-bar.component.scss']
})
export class MsStatusBarComponent implements OnInit {

  public get mineCount(): number {
    return this.gameService.getGame().minesCount;
  }

  public get time(): number {
    return this.gameService.getGame().time;
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  onClickButton(): void {
    alert('clicked!!!!');
  }
}
