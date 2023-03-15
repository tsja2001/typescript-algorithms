import { _IQueue } from "./_IQueue";

export class _Queue<T> implements _IQueue<T> {
  private data: T[] = []

	enQuque(element: T){
		this.data.push(element)
	}

	deQuque(){
		return this.data.shift()
	}

	size(){
		return this.data.length
	}

	isEmpty(){
		return this.data.length === 0
	}

	pick(){
		return this.data[0]
	}
}
