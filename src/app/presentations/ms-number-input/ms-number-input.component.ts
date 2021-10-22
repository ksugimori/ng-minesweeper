import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ms-number-input',
  templateUrl: './ms-number-input.component.html',
  styleUrls: ['./ms-number-input.component.scss']
})
export class MsNumberInputComponent {

  /** デフォルト値。無効な入力があった場合などはこの値に戻ります */
  private readonly defaultValue = 9;

  /** 値 */
  @Input() value!: number;

  /** 値の変更イベント */
  @Output() valueChange = new EventEmitter<number>();

  private setValue(value: number) {
    this.value;
    this.valueChange.emit(value);
  }

  /** 最小値。デフォルト 0 */
  @Input() min = 0;

  /** 最大値。 */
  @Input() max!: number;

  /**
   * 値を変更する。
   * 
   * 数字以外の文字は除外して integer として value を更新します。
   * @param rawValue input タグに入力されている値
   */
  update(rawValue: string) {

    const intValue = parseInt(rawValue.replace(/[^0-9]/g, ''));

    if (Number.isInteger(intValue)) {
      this.setValue(this.adjust(intValue));
    } else {
      this.setValue(this.defaultValue);
    }

  }

  /**
   * value を 1 増やす。最大値より大きな値にはなりません。
   */
  public increment() {
    this.setValue(this.adjust(this.value + 1));
  }

  /**
   * value を 1 減らす。最小値より小さな値にはなりません。
   */
  public decrement() {
    this.setValue(this.adjust(this.value - 1));
  }

  /**
   * 渡された値が範囲内に収まるように調整する。
   * @param newValue 値
   * @returns 調整後の値
   */
  private adjust(newValue: number) {
    if (newValue > this.max) {
      return this.max;
    }

    if (newValue < this.min) {
      return this.min;
    }

    return newValue;
  }
}
