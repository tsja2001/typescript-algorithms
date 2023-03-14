import { IList } from "@src/00_types/IList";

export interface IQueue<T> extends IList<T>{
	enQuque: (elememt: T) => void
	deQuque: () => T | undefined
}
