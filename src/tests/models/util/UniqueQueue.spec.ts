import { Point } from "src/app/models/util/Point"
import { UniqueQueue } from "src/app/models/util/UniqueQueue"

describe('UniqueQueue', () => {
  it('キューに追加した Point が順番に取得できること', () => {
    let queue = new UniqueQueue<Point>()

    queue.push(Point.of(0, 1))
    queue.push(Point.of(0, 2))

    expect(queue.shift()!.equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift()!.equals(Point.of(0, 2))).toBeTruthy()
  })

  it('要素が存在しない状態で shift すると undefined が返ること', () => {
    let queue = new UniqueQueue<Point>()

    queue.push(Point.of(0, 1))

    expect(queue.shift()!.equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift()).toBeUndefined()
  })

  it('すでに存在するものは追加されないこと', () => {
    let queue = new UniqueQueue<Point>()

    queue.push(Point.of(0, 1))
    queue.push(Point.of(0, 2))
    queue.push(Point.of(0, 1)) // これは重複するので追加されない

    expect(queue.shift()!.equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift()!.equals(Point.of(0, 2))).toBeTruthy()
    expect(queue.shift()).toBeUndefined()
  })
})
