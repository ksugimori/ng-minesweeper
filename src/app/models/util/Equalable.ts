/**
 * 比較可能なオブジェクトを表すインターフェース
 */
export interface Equalable<T> {
  /**
   * 別のオブジェクトと等しいか？
   */
  equals: (x: T) => boolean
}