import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ms-button',
  templateUrl: './ms-button.component.html',
  styleUrls: ['./ms-button.component.scss']
})
export class MsButtonComponent implements OnInit {

  /** ボタンクリックイベント */
  @Output() clickButton = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * ボタンクリック時のイベントを発火する。
   * @param $event 元のイベント
   */
  onClick($event: Event) {
    $event.stopPropagation();
    this.clickButton.emit();
  }
}
