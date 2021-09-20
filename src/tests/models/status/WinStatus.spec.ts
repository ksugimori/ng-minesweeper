import { Status } from 'src/app/models/status/Status';
import { Point } from 'src/app/models/util/Point';
import { Game } from 'src/app/models/Game';

describe('Status.WIN', () => {
  let game: Game;
  beforeEach(() => {
    spyOn(Game.prototype, 'doOpen')
    spyOn(Game.prototype, 'doFlag')

    game = new Game()
    game.status = Status.WIN
  })

  describe('#open', () => {
    it('doOpen が呼ばれないこと', () => {
      Status.WIN.open(game, Point.of(0, 0))

      expect(game.doOpen).not.toHaveBeenCalled()
    })
  })

  describe('#flag', () => {
    it('doFlag が呼ばれないこと', () => {
      Status.WIN.open(game, Point.of(0, 0))

      expect(game.doFlag).not.toHaveBeenCalled()
    })
  })

  describe('#isEnd', () => {
    it('false であること', () => {
      expect(Status.WIN.isEnd).toBeTruthy()
    })
  })
})
