import { _IStack } from "./_IStack";

export class _Stack<T> implements _IStack<T> {
	private stack: T[] = []

	push(element: T){
		this.stack.push(element)
	}

	pop(){
		return this.stack.pop()
	}

	pick(){
		return this.stack[this.stack.length - 1]
	}

	isEmpty(){
		return !this.stack.length
	}

	size() {
		return this.stack.length
	}
}
