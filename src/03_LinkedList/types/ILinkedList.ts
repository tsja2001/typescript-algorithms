import { IList } from "@src/00_types/IList"

export interface ILinkedList<T> extends IList<T> {
  get length(): number
  append(value: T): void
  traverse(): void
  insert(value: T, position: number, showLog?: boolean): boolean
  removeAt(position: number, showLog?: boolean): T | null
  remove(value: T): boolean
  get(position: number, showLog?: boolean): T | null
  update(value: T, position: number): boolean
  indexOf(value: T): number
}
