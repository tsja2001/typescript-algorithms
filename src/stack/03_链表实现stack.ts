import { IStack } from './IStack';
export class LinkedStack<T> implements IStack<T> {
	push(element: T): void {
		throw new Error('Method not implemented.');
	}
	pop(): T | undefined {
		throw new Error('Method not implemented.');
	}
	pick(): T | undefined {
		throw new Error('Method not implemented.');
	}
	isEmpty(): boolean {
		throw new Error('Method not implemented.');
	}
	size(): number {
		throw new Error('Method not implemented.');
	}

}
