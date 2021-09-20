import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-status-bar',
  templateUrl: './ms-status-bar.component.html',
  styleUrls: ['./ms-status-bar.component.scss']
})
export class MsStatusBarComponent implements OnInit {

  // TODO: Game オブジェクトから取得？
  public mineCount = 10;
  public time = 123;

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(): void {
    alert('clicked!!!!');
  }
}
