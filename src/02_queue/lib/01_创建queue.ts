import { IQueue } from '../types/IQueue';
export class Queue<T> implements IQueue<T>{
	protected data: T[] = []

	enQuque (elememt: T) {
		this.data.push(elememt)
	};
	deQuque(){
		return this.data.shift()
	};
	pick(){
		return this.data[0]
	};
	isEmpty(){
		return this.data.length === 0
	};
	size(){
		return this.data.length
	}
	traverse(){
		return this.data
	}
}


