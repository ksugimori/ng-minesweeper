import { Status } from 'src/app/models/status/Status';
import { Point } from 'src/app/models/util/Point';
import { Game } from 'src/app/models/Game';

describe('Status.PLAY', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game()
    game.status = Status.PLAY
  })

  describe('#open', () => {
    it('doOpen が呼ばれること', () => {
      spyOn(Game.prototype, 'doOpen')

      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // メソッド呼び出し
      expect(game.doOpen).toHaveBeenCalledTimes(1)
    })

    it('クリアしたらステータスが WIN になること', () => {
      spyOn(Game.prototype, 'isWin').and.returnValue(true) // クリア済ということにする
      spyOn(Game.prototype, 'timerStop')

      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // 検証
      expect(game.status).toBe(Status.WIN)
      expect(game.timerStop).toHaveBeenCalledTimes(1)
    })

    it('ミスしていたらステータスが LOSE になること', () => {
      spyOn(Game.prototype, 'isLose').and.returnValue(true)
      spyOn(Game.prototype, 'timerStop')

      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // 検証
      expect(game.status).toBe(Status.LOSE)
      expect(game.timerStop).toHaveBeenCalledTimes(1)
    })
  })

  describe('#flag', () => {
    it('doFlag が呼ばれること', () => {
      spyOn(Game.prototype, 'doFlag')

      // テスト
      Status.PLAY.flag(game, Point.of(0, 0))

      // メソッド呼び出し
      expect(game.doFlag).toHaveBeenCalledTimes(1)
    })
  })

  describe('#isEnd', () => {
    it('false であること', () => {
      expect(Status.PLAY.isEnd).toBeFalsy()
    })
  })
})
