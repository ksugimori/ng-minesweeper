import { Injectable } from '@angular/core';
import { Game } from './models/Game';

/**
 * ゲーム情報の保持、操作を行うサービス。
 * 
 * このサービス内に Game インスタンスを保持。
 * 基本方針は次のようになります。
 * - 上位コンポーネントで getGame() または reset() で Game インスタンスを取得
 * - 子コンポーネントでは getGame() または reset() を直接呼ばずにプロパティとして親コンポーネントから渡す
 * - セルをクリックした時など、Game の操作はこのサービスを通じて行う
 */
@Injectable({
  providedIn: 'root'
})
export class GameService {
  /**
   * Game インスタンス
   * 
   * 初期化は GameService のコンストラクタでのみ行うため、
   * 操作は常に同じインスタンスに対して行うことになります。
   */
  private game: Game;

  /**
   * コンストラクタ
   */
  constructor() {
    this.game = new Game();
    this.game.initialize();
  }

  /**
   * Game を取得する。
   * @returns Game
   */
  public getGame(): Game {
    return this.game;
  }

  /**
   * Game をリセットする。
   * @returns リセット後のインスタンス
   */
  public reset(): Game {
    this.game.initialize();
    return this.game;
  }

  /**
   * セルを開く
   * @param x x座標
   * @param y y座標
   */
   public open(x: number, y: number): void {
    this.game.open(x, y);
  }

  /**
   * セルにフラグを立てる。
   * @param x x座標
   * @param y y座標
   */
   public flag(x: number, y: number): void {
    this.game.flag(x, y);
  }
}
