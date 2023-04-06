export class PriorityNode<T> {
	constructor(public value: T, public priority: number){
		this.value = value
		this.priority = priority
	}

	// 用于堆来比较大小
	valueOf() {
		return this.priority
	}
}
