import { Point } from './util/Point';
import { Status } from './status/Status';
import { AbstractStatus } from './status/AbstractStatus';
import { Field } from './Field';
import { StopWatch } from './util/StopWatch';
import { Setting } from './Setting';
import { UniqueQueue } from './util/UniqueQueue';
import random from './util/random';
import { Cell } from './Cell';

/**
 * マインスイーパー全体を管理するクラス
 */
export class Game {
  public field: Field;
  public stopWatch: StopWatch;
  public setting: Setting;
  public status: AbstractStatus;

  /**
   * コンストラクタ
   */
  constructor() {
    this.field = new Field();
    this.stopWatch = new StopWatch();
    this.setting = Setting.EASY;
    this.status = Status.INIT;
  }

  /**
   * フラグの数
   */
  get flagCount() {
    return this.field.points(cell => cell.isFlag).length;
  }

  /**
   * 閉じているセルの数
   */
  get closedCount() {
    return this.field.points(cell => !cell.isOpen).length;
  }

  /**
   * ミスしたセル数（地雷なのに開いてしまったセルの数）
   */
  get missCount() {
    return this.field.points(cell => cell.isMine && cell.isOpen).length;
  }

  /**
   * プレイ時間
   */
  get playTime() {
    return this.stopWatch.playTime;
  }

  /**
   * タイマー計測を開始する
   */
  timerStart() {
    this.stopWatch.start();
  }

  /**
   * タイマー計測を停止する
   */
  timerStop() {
    this.stopWatch.stop();
  }

  /**
   * 勝利状態か？
   */
  isWin() {
    return this.missCount === 0 && this.closedCount === this.setting.numMines;
  }

  /**
   * 敗北状態か？
   */
  isLose() {
    return this.missCount > 0;
  }

  /**
   * 盤面を初期化する。
   */
  initialize() {
    this.field = new Field(this.setting.width, this.setting.height);

    this.stopWatch.reset();
    this.status = Status.INIT;
  }

  /**
   * 地雷を配置する。
   *
   * 初手アウトを防ぐため、引数で渡された場所には配置しない。
   * @param exclude 除外する座標
   */
  mine(exclude: Point) {
    // 地雷をランダムにセット
    random.points(this.setting, exclude).forEach(p => this.field.cellAt(p)?.mine());

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    this.field.points().forEach(p => {
      let cell = this.field.cellAt(p)!;
      if (!cell.isMine) {
        cell.count = this.field.pointsArround(p, c => c.isMine).length;
      }
    });
  }

  /**
   * セルを開く
   * @param x x座標
   * @param y y座標
   */
  open(x: number, y: number) {
    this.status.open(this, Point.of(x, y));
  }

  /**
   * 指定したセルを開く。
   *
   * @param point 座標
   */
  doOpen(point: Point) {
    const cell = this.field.cellAt(point);
    if (cell === undefined) {
      return;
    }

    if (cell.isFlag) {
      return;
    }

    if (cell.isOpen) {
      let arroundFlagCount = this.field.pointsArround(point, c => c.isFlag).length;

      if (cell.count === arroundFlagCount) {
        this.openRecursive(point);
      }
    } else {
      cell.open();

      if (cell.isEmpty) {
        this.openRecursive(point);
      }
    }
  }

  /**
   * フラグをつける。
   * @param x x座標
   * @param y y座標
   */
  flag(x: number, y: number) {
    this.status.flag(this, Point.of(x, y));
  }

  /**
   * フラグをつける。
   * @param point 座標
   */
  doFlag(point: Point) {
    let cell = this.field.cellAt(point);
    if (cell === undefined) {
      return;
    }

    if (cell.isFlag) {
      cell.unflag();
    } else {
      cell.flag();
    }
  }

  /**
   * 周囲のセルを再帰的に開く。
   *
   * 数字、フラグ付きセルに到達したらそこで終了します。
   * @param point 座標
   */
  openRecursive(point: Point) {
    // 開けるセルであるか？
    const canOpen = (cell: Cell) => !cell.isOpen && !cell.isFlag;

    let queue = new UniqueQueue<Point>();
    this.field.pointsArround(point, canOpen).forEach(p => queue.push(p));

    let target;
    while ((target = queue.shift()) !== undefined) {
      let cell = this.field.cellAt(target);
      if (cell === undefined) {
        continue;
      }

      cell.open();

      // 開いたセルが空白なら、その周囲を再帰的に開く
      if (cell.isEmpty) {
        this.field.pointsArround(target, canOpen).forEach(p => queue.push(p));
      }
    }
  }
}
