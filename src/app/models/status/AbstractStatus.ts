import { Game } from "../Game";
import { Point } from "../util/Point";

/**
 * ゲームの状態
 */
export class AbstractStatus {
  public name: string;

  constructor (name: string) {
    this.name = name
  }

  /**
   * 終了状態か？
   */
  get isEnd (): boolean {
    throw new Error(`Method Unimplemented! isEnd()`)
  }

  /**
   * 指定した座標のセルを開く。
   * @param game ゲーム
   * @param point 座標
   */
  open (game: Game, point: Point) {
    throw new Error(`Method Unimplemented! open(${game}, ${point})`)
  }

  /**
   * 指定した座標のセルにフラグを立てる。
   * @param game ゲーム
   * @param point 座標
   */
  flag (game: Game, point: Point) {
    throw new Error(`Method Unimplemented! flag(${game}, ${point}`)
  }
}
