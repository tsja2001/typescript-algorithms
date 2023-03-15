import { IList } from './../../00_types/IList'

export interface _IQueue<T> extends IList<T> {
  enQuque: (element: T) => void
  deQuque: () => T | undefined
}
