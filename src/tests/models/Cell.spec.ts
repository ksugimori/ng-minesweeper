import { Cell } from "src/app/models/Cell"

describe('Cell', () => {
  describe('#initialize', () => {
    it('初期状態では count=0, isOpen=false, isMine=false, isFlag=false であること', () => {
      const cell = new Cell()

      expect(cell.count).toBe(0)
      expect(cell.isOpen).toBe(false)
      expect(cell.isMine).toBe(false)
      expect(cell.isFlag).toBe(false)
    })

    it('パラメータを渡すと初期状態にマージされること', () => {
      const cell = new Cell({
        count: 999,
        isOpen: true,
        isMine: true,
        isFlag: true
      })

      expect(cell.count).toBe(999)
      expect(cell.isOpen).toBe(true)
      expect(cell.isMine).toBe(true)
      expect(cell.isFlag).toBe(true)
    })
  })

  describe('#open', () => {
    it('isOpen が true になること', () => {
      const cell = new Cell()

      cell.open()
      expect(cell.isOpen).toBe(true)

      // 複数回実行しても true のままであること
      cell.open()
      expect(cell.isOpen).toBe(true)
    })
  })

  describe('#mine', () => {
    it('isMine が true になること', () => {
      const cell = new Cell()

      cell.mine()
      expect(cell.isMine).toBe(true)

      // 複数回実行しても true のままであること
      cell.mine()
      expect(cell.isMine).toBe(true)
    })
  })

  describe('#flag', () => {
    it('isFlag が true になること', () => {
      const cell = new Cell()

      cell.flag()
      expect(cell.isFlag).toBe(true)

      // 複数回実行しても true のままであること
      cell.flag()
      expect(cell.isFlag).toBe(true)
    })

    it('open 済のセルに対してはフラグは付けられないこと', () => {
      const cell = new Cell()

      cell.open()
      cell.flag()
      expect(cell.isFlag).toBe(false)
    })

    it('isMine = false のセルにフラグをつけたら isMiss = true になること', () => {
      const cell = new Cell()

      cell.flag()

      expect(cell.isMiss).toBeTruthy()
    })
  })

  describe('#unflag', () => {
    it('isFlag が false になること', () => {
      const cell = new Cell()

      cell.unflag()
      expect(cell.isFlag).toBe(false)

      // 複数回実行しても true のままであること
      cell.unflag()
      expect(cell.isFlag).toBe(false)
    })
  })

  describe('#isEmpty', () => {
    it('count が 0 なら true を返し、それ以外なら false を返すこと', () => {
      const cell = new Cell()

      cell.count = 0
      expect(cell.isEmpty).toBeTruthy()

      cell.count = 1
      expect(cell.isEmpty).toBeFalsy()
    })

    it('count が 0 でも isMine = true なら false を返すこと', () => {
      const cell = new Cell()

      cell.count = 0
      cell.mine()
      expect(cell.isEmpty).toBeFalsy()
    })
  })

  describe('#countString', () => {
    it('count=0 のときは空白文字になること', () => {
      const cell = new Cell()
      cell.count = 0

      expect(cell.countString).toEqual('')
    })

    it('count=1...9 のときはそのまま文字になること', () => {
      const cell = new Cell()

      cell.count = 1;
      expect(cell.countString).toEqual('1')

      cell.count = 2;
      expect(cell.countString).toEqual('2')

      cell.count = 3;
      expect(cell.countString).toEqual('3')

      cell.count = 4;
      expect(cell.countString).toEqual('4')

      cell.count = 5;
      expect(cell.countString).toEqual('5')

      cell.count = 6;
      expect(cell.countString).toEqual('6')

      cell.count = 7;
      expect(cell.countString).toEqual('7')

      cell.count = 8;
      expect(cell.countString).toEqual('8')

      cell.count = 9;
      expect(cell.countString).toEqual('9')
    })
  })

  describe('#isMiss', () => {
    it('地雷なのに開いてしまった場合は true となること', () => {
      const cell = new Cell()
      cell.isMine = true
      cell.isOpen = true
      cell.isFlag = false

      expect(cell.isMiss).toBeTruthy()
    })

    it('地雷じゃないのにフラグを立ててしまった場合は true となること', () => {
      const cell = new Cell()
      cell.isMine = false
      cell.isOpen = false
      cell.isFlag = true

      expect(cell.isMiss).toBeTruthy()
    })

    it('地雷じゃないセルを開いた場合は false となること', () => {
      const cell = new Cell()
      cell.isMine = false
      cell.isOpen = true
      cell.isFlag = false

      expect(cell.isMiss).toBeFalsy()
    })

    it('地雷セルにフラグを立てた場合は false となること', () => {
      const cell = new Cell()
      cell.isMine = true
      cell.isOpen = false
      cell.isFlag = true

      expect(cell.isMiss).toBeFalsy()
    })
  })
})
