/**
 * 時間計測用のクラス
 */
export class StopWatch {
  public playTime: number;

  public startTime?: number;

  private timer?: number;

  constructor() {
    this.playTime = 0
    this.startTime = undefined;
    this.timer = undefined;
  }

  /**
   * 計測を開始する。
   *
   * １秒ごとに playTime の値を更新します。
   */
  start() {
    this.startTime = Date.now()
    this.timer = window.setInterval(() => {
      if (this.startTime) {
        this.playTime = Math.floor((Date.now() - this.startTime) / 1000)
      } else {
        this.playTime = 0;
      }
    }, 1000)
  }

  /**
   * 計測を停止する。
   *
   * このメソッドでは playTime はリセットされません。
   */
  stop() {
    clearInterval(this.timer)
  }

  /**
   * 初期状態に戻す
   */
  reset() {
    this.stop()
    this.playTime = 0;
    this.startTime = undefined;
  }
}
