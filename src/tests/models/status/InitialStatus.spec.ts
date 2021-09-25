import { Status } from 'src/app/models/status/Status';
import { Point } from 'src/app/models/util/Point';
import { Game } from 'src/app/models/Game';

describe('Status.INIT', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
    game.status = Status.INIT;
  });

  describe('#open', () => {
    it('mine, timerStart, doOpen が呼ばれること', () => {
      spyOn(Game.prototype, 'mine');
      spyOn(Game.prototype, 'doOpen');
      spyOn(Game.prototype, 'timerStart');
      spyOn(Game.prototype, 'timerStop');

      // テスト
      Status.INIT.open(game, Point.of(0, 0));

      // メソッド呼び出し

      expect(game.mine).toHaveBeenCalledTimes(1);
      expect(game.timerStart).toHaveBeenCalledTimes(1);
      expect(game.doOpen).toHaveBeenCalledTimes(1);

      // timerStop は呼ばれていないこと
      expect(game.timerStop).not.toHaveBeenCalled();
    });

    it('game のステータスが PLAY に変わること', () => {
      // テスト
      Status.INIT.open(game, Point.of(0, 0));

      // ステータスの更新を確認
      expect(game.status).toBe(Status.PLAY);
    });

    it('クリアしていればステータスが WIN に変わること', () => {
      spyOn(Game.prototype, 'timerStop');
      spyOn(Game.prototype, 'isWin').and.returnValue(true); // クリア済ということにする

      // テスト
      Status.INIT.open(game, Point.of(0, 0));

      // ステータスの更新を確認
      expect(game.status).toBe(Status.WIN);

      // この場合は timerStop が呼ばれること
      expect(game.timerStop).toHaveBeenCalledTimes(1);
    });
  });

  describe('#flag', () => {
    it('doFlag が呼ばれないこと', () => {
      spyOn(Game.prototype, 'doFlag');

      Status.INIT.flag(game, Point.of(0, 0));

      expect(game.doFlag).not.toHaveBeenCalled();
    });
  });

  describe('#isEnd', () => {
    it('false であること', () => {
      expect(Status.INIT.isEnd).toBeFalsy();
    });
  });
});
