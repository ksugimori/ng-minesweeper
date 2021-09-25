import { StopWatch } from "src/app/models/util/StopWatch";

describe('StopWatch', () => {
  describe('#playTime', () => {
    it('経過時間が測れること', () => {
      jasmine.clock().install();
      jasmine.clock().mockDate();

      const stopWatch = new StopWatch();
      stopWatch.start();

      // 時刻を 3.001 秒経過 させる
      jasmine.clock().tick(3001);

      // 経過時間が 3秒 になっていることを検証
      expect(stopWatch.playTime).toBe(3);

      // もう１秒進ませる
      jasmine.clock().tick(1001);
      expect(stopWatch.playTime).toBe(4);

      // 停止
      stopWatch.stop();

      // もう１秒進ませる
      jasmine.clock().tick(1001);
      expect(stopWatch.playTime).toBe(4); // ここは時間が経過していないことを確認

      // リセットすると 0 秒になること
      stopWatch.reset();
      expect(stopWatch.playTime).toBe(0);

      jasmine.clock().uninstall();
    });
  });
});
