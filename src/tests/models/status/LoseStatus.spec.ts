import { Status } from 'src/app/models/status/Status';
import { Point } from 'src/app/models/util/Point';
import { Game } from 'src/app/models/Game';

describe('Status.LOSE', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game()
    game.status = Status.LOSE
  })

  describe('#open', () => {
    it('doOpen が呼ばれないこと', () => {
      spyOn(Game.prototype, 'doOpen')

      Status.LOSE.open(game, Point.of(0, 0))

      expect(game.doOpen).not.toHaveBeenCalled()
    })
  })

  describe('#flag', () => {
    it('doFlag が呼ばれないこと', () => {
      spyOn(Game.prototype, 'doFlag')

      Status.LOSE.open(game, Point.of(0, 0))

      expect(game.doFlag).not.toHaveBeenCalled()
    })
  })

  describe('#isEnd', () => {
    it('true であること', () => {
      expect(Status.LOSE.isEnd).toBeTruthy()
    })
  })
})
