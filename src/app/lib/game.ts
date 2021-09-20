export interface Setting {
  width: number;
  height: number;
  numMines: number;
}

export class Game {
  public setting: Setting;

  public time: number;
  public get minesCount(): number {
    return this.setting.numMines;
  }

  constructor() {
    this.setting = {
      width: 9,
      height: 9,
      numMines: 10
    }

    this.time = 123;
  }
}