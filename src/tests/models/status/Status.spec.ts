import { Status } from "src/app/models/status/Status";

describe('Status', () => {
  it('INIT, PLAY, WIN, LOSE の４つのステータスが定義されていること', () => {
    expect(Status.INIT).not.toBeUndefined();
    expect(Status.PLAY).not.toBeUndefined();
    expect(Status.WIN).not.toBeUndefined();
    expect(Status.LOSE).not.toBeUndefined();
  });
});
