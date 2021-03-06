import { Point } from "src/app/models/util/Point";
import random from "src/app/models/util/random";
import { Setting } from "src/app/models/Setting";

describe('random', () => {
  describe('#points', () => {
    it('指定した長さの配列が返されること', () => {
      let setting = new Setting(3, 3, 2);
      let result = random.points(setting, Point.of(0, 0));

      expect(result.length).toBe(2);
    });

    it('除外対象の座標が含まれないこと', () => {
      let exclude = Point.of(1, 1);

      for (let i = 0; i < 9; i++) {
        let setting = new Setting(3, 3, 8);
        let result = random.points(setting, exclude);
        expect(result.includes(exclude)).toBeFalsy();
      }
    });
  });
});
