import { IList } from './../00_types/IList';
export interface IStack<T> extends IList<T> {
  push(element: T): void
  pop(): T | undefined
}
